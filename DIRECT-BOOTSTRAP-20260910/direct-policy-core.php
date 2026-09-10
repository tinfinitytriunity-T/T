<?php
/* Internal include, not an endpoint. Candidate PHP 5.6 syntax; runtime gate required. */
function dc_fail($code) { throw new Exception($code); }
function dc_require($condition, $code) { if (!$condition) dc_fail($code); }
function dc_path($path) {
    dc_require(is_string($path) && strlen($path) <= 1024 && preg_match('//u', $path) === 1, 'INVALID_PATH');
    dc_require(strpos($path, '\\') === false && strpos($path, ':') === false && strpos($path, '%') === false && preg_match('/\p{Cc}/u', $path) === 0, 'INVALID_PATH');
    if ($path !== '') foreach (explode('/', $path) as $p) {
        dc_require($p !== '' && $p[0] !== '.' && strtolower($p) !== '_bridge', 'PROTECTED_PATH');
    }
    return $path; // Exact UTF-8 bytes: no trim, Unicode normalization or renaming.
}
function dc_prefix($prefix) {
    dc_require(is_string($prefix) && $prefix !== '/', 'CONFIG_PREFIX_INVALID');
    if ($prefix !== '' && substr($prefix, -1) === '/') $prefix = substr($prefix, 0, -1);
    try { dc_path($prefix); } catch (Exception $e) { dc_fail('CONFIG_PREFIX_INVALID'); }
    return $prefix; // The empty string is the ONLY spelling for the scoped root.
}
function dc_prefixes($list, $fold) {
    dc_require(is_array($list) && array_values($list) === $list, 'CONFIG_PREFIX_INVALID');
    $out = array(); $seen = array();
    foreach ($list as $prefix) {
        $prefix = dc_prefix($prefix); $key = $fold ? strtolower($prefix) : $prefix;
        dc_require(!in_array($key, $seen, true), 'CONFIG_PREFIX_AMBIGUOUS');
        $seen[] = $key; $out[] = $prefix;
    }
    return $out;
}
function dc_config($cfg) {
    dc_require(is_array($cfg) && isset($cfg['keys']) && is_array($cfg['keys']), 'CONFIG_INVALID');
    // Validate every configured key before any request state is written, including disabled keys.
    foreach ($cfg['keys'] as $kid => $policy) {
        dc_require(is_array($policy), 'CONFIG_INVALID');
        foreach (array('paths','php_paths','deny') as $field) {
            dc_require(array_key_exists($field,$policy), 'CONFIG_PREFIX_INVALID');
            $policy[$field] = dc_prefixes($policy[$field], $field === 'deny');
        }
        // Secure fallback for older fixtures/configs; public zones MUST opt in explicitly.
        $modes = array_key_exists('create_modes',$policy) ? $policy['create_modes'] : array();
        dc_require(is_array($modes) && array_values($modes) === $modes, 'CONFIG_MODE_INVALID');
        $seen = array(); $normalized = array();
        foreach ($modes as $zone) {
            dc_require(is_array($zone) && count($zone) === 3 && isset($zone['path'],$zone['file'],$zone['dir']), 'CONFIG_MODE_INVALID');
            $zone['path'] = dc_prefix($zone['path']);
            dc_require(!in_array($zone['path'],$seen,true), 'CONFIG_PREFIX_AMBIGUOUS');
            dc_require(is_int($zone['file']) && $zone['file'] >= 0 && ($zone['file'] & ~0666) === 0, 'CONFIG_MODE_INVALID');
            dc_require(is_int($zone['dir']) && $zone['dir'] >= 0 && $zone['dir'] <= 0777 && ($zone['dir'] & 0700) === 0700, 'CONFIG_MODE_INVALID');
            $seen[] = $zone['path']; $normalized[] = $zone;
        }
        $policy['create_modes'] = $normalized; $cfg['keys'][$kid] = $policy;
    }
    return $cfg;
}
function dc_policy_hash($kid, $policy) {
    $safe=array(
        'kid'=>$kid,
        'enabled'=>$policy['enabled']===true,
        'ops'=>array_values($policy['ops']),
        'paths'=>array_values($policy['paths']),
        'php_paths'=>array_values($policy['php_paths']),
        'deny'=>array_values($policy['deny']),
        'create_modes'=>array_values($policy['create_modes'])
    );
    $json=json_encode($safe, JSON_UNESCAPED_SLASHES);
    dc_require(is_string($json),'POLICY_ENCODING');
    return hash('sha256',$json);
}
function dc_creation_mode($policy, $rel, $directory) {
    $mode = $directory ? 0700 : 0600; $best = -1;
    foreach ($policy['create_modes'] as $zone) {
        $prefix = $zone['path'];
        if (($prefix === '' || dc_inside($prefix,$rel)) && strlen($prefix) > $best) {
            $mode = $zone[$directory ? 'dir' : 'file']; $best = strlen($prefix);
        }
    }
    return $mode;
}
function dc_metadata($path) {
    clearstatcache(true,$path); $s = lstat($path);
    dc_require(is_array($s) && ($s['mode'] & 0170000) === 0100000, 'METADATA_UNAVAILABLE');
    dc_require(($s['mode'] & 07000) === 0, 'SPECIAL_MODE_UNSUPPORTED');
    return $s;
}
function dc_metadata_equal($a, $b) {
    foreach (array('dev','ino','mode','uid','gid','size','mtime','ctime') as $k) if ($a[$k] !== $b[$k]) return false;
    return true;
}
function dc_apply_metadata($tmp, $mode, $old) {
    if ($old !== null) {
        $now = dc_metadata($tmp);
        if ($now['uid'] !== $old['uid']) dc_require(chown($tmp,$old['uid']), 'OWNER_PRESERVATION_FAILED');
        if ($now['gid'] !== $old['gid']) dc_require(chgrp($tmp,$old['gid']), 'GROUP_PRESERVATION_FAILED');
    }
    dc_require(chmod($tmp,$mode), 'MODE_FAILED');
    $now = dc_metadata($tmp);
    dc_require(($now['mode'] & 0777) === $mode, 'MODE_FAILED');
    if ($old !== null) dc_require($now['uid'] === $old['uid'] && $now['gid'] === $old['gid'], 'OWNER_PRESERVATION_FAILED');
    // POSIX ACLs/xattrs are not copied or certified by this portable implementation.
}
function dc_inside($root, $p) { return $p === $root || strpos($p, $root.'/') === 0; }
function dc_allowed_path($rel, $policy, $php) {
    dc_path($rel);
    foreach (explode('/', strtolower($rel)) as $part) {
        dc_require(!preg_match('/(^|[-_.])(secret|secrets|credential|credentials|keyring|approval|approvals|signer)([-_.]|$)/', $part), 'PROTECTED_PATH');
        dc_require(!in_array($part, array('fs-bridge.php','web-direct.php','mtha-direct.php','php-guarded.php','bridge-policy.php','config.php','wp-config.php'), true), 'PROTECTED_PATH');
        dc_require(!preg_match('/\.(pem|key|p12|pfx|env|ini|sqlite|sqlite3|db|bak)$/', $part), 'PROTECTED_PATH');
    }
    foreach ($policy['deny'] as $prefix) {
        dc_require($prefix !== '' && !dc_inside(strtolower($prefix), strtolower($rel)), 'PROTECTED_PATH');
    }
    $allowed = false;
    foreach ($policy[$php ? 'php_paths' : 'paths'] as $prefix) {
        if ($prefix === '' || dc_inside($prefix, $rel)) $allowed = true;
    }
    dc_require($allowed, 'PATH_NOT_GRANTED');
}
function dc_target($root, $rel) {
    $p = $root;
    if ($rel === '') return $p;
    foreach (explode('/', $rel) as $part) {
        $p .= '/'.$part;
        clearstatcache(true, $p);
        dc_require(!is_link($p), 'SYMLINK_FORBIDDEN');
        if (file_exists($p)) {
            $real = realpath($p);
            dc_require($real !== false && dc_inside($root, $real), 'OUTSIDE_SCOPE');
            dc_require(is_file($p) || is_dir($p), 'SPECIAL_FILE_FORBIDDEN');
        }
    }
    dc_require(is_dir(dirname($p)) && dc_inside($root, realpath(dirname($p))), 'PARENT_MISSING');
    return $p;
}
function dc_save($file, $data) {
    $bytes = json_encode($data);
    dc_require(is_string($bytes), 'STATE_ENCODING');
    $tmp = tempnam(dirname($file), '.state-');
    dc_require($tmp !== false, 'STATE_TEMP');
    @chmod($tmp, 0600);
    if (file_put_contents($tmp, $bytes, LOCK_EX) !== strlen($bytes) || !rename($tmp, $file)) {
        @unlink($tmp); dc_fail('STATE_WRITE_FAILED');
    }
}
function dc_precondition($path, $expected) {
    clearstatcache(true, $path);
    dc_require(!is_link($path), 'SYMLINK_FORBIDDEN');
    if ($expected === 'ABSENT') dc_require(!file_exists($path), 'PRECONDITION_CONFLICT');
    else dc_require(is_file($path) && filesize($path)<=4000000 && hash_file('sha256', $path) === $expected, 'PRECONDITION_CONFLICT');
}
function dc_decode($s) {
    dc_require(is_string($s) && strlen($s) <= 12000 && preg_match('/^[A-Za-z0-9_-]+$/', $s), 'BAD_ENCODING');
    $v = base64_decode(strtr($s, '-_', '+/').str_repeat('=', (4-strlen($s)%4)%4), true);
    dc_require($v !== false, 'BAD_ENCODING'); return $v;
}
function dc_range($p) {
    if (!array_key_exists('range',$p)) return null;
    $r = $p['range'];
    dc_require($p['op'] === 'read' && is_array($r) && count($r) === 3 && isset($r['offset'],$r['max_bytes'],$r['if_sha256']), 'INVALID_READ_RANGE');
    dc_require(is_int($r['offset']) && $r['offset'] >= 0 && $r['offset'] <= 9007199254740991 && is_int($r['max_bytes']) && $r['max_bytes'] >= 1 && $r['max_bytes'] <= 4000000, 'INVALID_READ_RANGE');
    dc_require(is_string($r['if_sha256']) && ($r['if_sha256'] === '' || preg_match('/^[a-f0-9]{64}$/D',$r['if_sha256'])), 'INVALID_READ_RANGE');
    dc_require($r['offset'] === 0 || $r['if_sha256'] !== '', 'READ_VERSION_REQUIRED');
    return $r;
}
function dc_intent_json($p) {
    $values = array();
    foreach (array('profile','kid','audience','scope','actor','method','op','path','size','sha256','expected','request_id','expires','lookup') as $k) {
        dc_require(array_key_exists($k,$p), 'MISSING_FIELD');
        if ($k === 'size' || $k === 'expires') dc_require(is_int($p[$k]) && $p[$k] >= 0 && $p[$k] <= 9007199254740991, 'INVALID_FIELD');
        else dc_require(is_string($p[$k]), 'INVALID_FIELD');
        $values[] = $p[$k];
    }
    $r = dc_range($p);
    if ($r !== null) $values[] = array('READ_RANGE_1',$r['offset'],$r['max_bytes'],$r['if_sha256']);
    // ASCII JSON; no JSON_UNESCAPED_UNICODE or PHP >=7.1 line-terminator flag.
    $json = json_encode($values, JSON_UNESCAPED_SLASHES);
    dc_require(is_string($json), 'INTENT_ENCODING');
    return $json;
}
function dc_intent_digest($p) { return hash('sha256',dc_intent_json($p)); }
function dc_read_file($target, $op, $range) {
    $f = fopen($target,'rb'); dc_require($f !== false,'READ_FAILED');
    try {
        $before = fstat($f);
        dc_require(is_array($before) && is_int($before['size']) && $before['size'] >= 0 && $before['size'] <= 9007199254740991, 'FILE_SIZE_UNSUPPORTED');
        $total = $before['size']; $offset = $range === null ? 0 : $range['offset'];
        $limit = $range === null ? 4000000 : $range['max_bytes'];
        if ($op === 'read') {
            if ($range === null) dc_require($total <= 4000000,'FILE_TOO_LARGE_USE_BOUNDED_READ');
            dc_require($offset <= $total,'READ_OFFSET_OUT_OF_RANGE');
        }
        $ctx = hash_init('sha256'); $pos = 0; $bytes = '';
        // Hash the entire version and collect the requested slice in the SAME streaming pass.
        // Memory is bounded; time/I/O remain O(total size), including for stat.
        while (!feof($f)) {
            $chunk = fread($f,65536); dc_require(is_string($chunk) && ($chunk !== '' || feof($f)),'READ_FAILED');
            if ($chunk === '') break;
            $n = strlen($chunk); hash_update($ctx,$chunk);
            if ($op === 'read' && $pos + $n > $offset && strlen($bytes) < $limit) {
                $start = max(0,$offset-$pos);
                $bytes .= substr($chunk,$start,min($n-$start,$limit-strlen($bytes)));
            }
            $pos += $n; dc_require($pos <= $total,'READ_VERSION_CHANGED');
        }
        $fileHash = hash_final($ctx); $after = fstat($f);
        clearstatcache(true,$target); $named = lstat($target);
        dc_require($pos === $total && is_array($after) && is_array($named) && dc_metadata_equal($before,$after) && dc_metadata_equal($after,$named), 'READ_VERSION_CHANGED');
        $data = array('type'=>'file','size'=>$total,'sha256'=>$fileHash,'mtime'=>(int)$before['mtime'],'mode'=>sprintf('%04o',$before['mode'] & 0777));
        if ($op === 'stat') return $data;
        if ($range !== null && $range['if_sha256'] !== '') dc_require($range['if_sha256'] === $fileHash,'READ_VERSION_CHANGED');
        $size = strlen($bytes); dc_require($size === min($limit,$total-$offset),'READ_FAILED');
        $eof = $offset+$size === $total;
        return array('type'=>'file','size'=>$size,'sha256'=>hash('sha256',$bytes),'content_base64'=>base64_encode($bytes),
            'total_size'=>$total,'file_sha256'=>$fileHash,'offset'=>$offset,'max_bytes'=>$limit,
            'range_complete'=>true,'complete'=>$offset === 0 && $size === $total,'eof'=>$eof,'next_offset'=>$eof ? null : $offset+$size);
    } finally { fclose($f); }
}
