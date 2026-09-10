<?php
function dc_execute($p, $body, $cfg, $root, $method, $q, $sig) {
    $cfg=dc_config($cfg);
    $now=time();
    dc_require(isset($p['profile']) && $p['profile']==='DIRECT_POLICY_1', 'PROFILE_REQUIRED');
    dc_require(isset($p['kid']) && is_string($p['kid']) && isset($cfg['keys'][$p['kid']]), 'UNKNOWN_KEY');
    $policy=$cfg['keys'][$p['kid']];
    dc_require($policy['enabled'] === true, 'KEY_DISABLED');
    dc_require(isset($p['audience'],$p['scope']) && $p['audience']===$cfg['audience'] && $p['scope']===$cfg['scope'], 'WRONG_DESTINATION');
    dc_require(openssl_verify($cfg['canon']."\n".$q."\n".hash('sha256',$body), $sig, $policy['public_key'], OPENSSL_ALGO_SHA256) === 1, 'BAD_SIGNATURE');
    dc_require(isset($p['ts'],$p['expires']) && is_int($p['ts']) && is_int($p['expires']) && abs($now-$p['ts'])<=180 && $p['expires'] >= $now && $p['expires'] <= $now+300, 'EXPIRED');
    dc_require(isset($p['nonce']) && is_string($p['nonce']) && preg_match('/^[A-Za-z0-9_-]{32,96}$/',$p['nonce']), 'BAD_NONCE');
    dc_require(isset($p['request_id']) && is_string($p['request_id']) && preg_match('/^[a-f0-9]{32}$/',$p['request_id']), 'BAD_REQUEST_ID');
    dc_require(isset($p['actor']) && is_string($p['actor']) && preg_match('/^[A-Za-z0-9@._:-]{1,128}$/',$p['actor']), 'BAD_ACTOR');
    dc_require(isset($p['op']) && in_array($p['op'],$policy['ops'],true), 'OP_NOT_GRANTED');
    $op=$p['op']; $mut=in_array($op,array('mkdir','write','write_php'),true);
    dc_require(in_array($op,array('ping','status','list','stat','read','mkdir','write','write_php'),true), 'UNSUPPORTED_OP');
    dc_require(isset($p['method']) && $p['method']===$method && $method===($mut?'POST':'GET'), 'METHOD_MISMATCH');
    dc_require(isset($p['size'],$p['sha256']) && is_int($p['size']) && $p['size']===strlen($body) && $p['size']<=4000000 && $p['sha256']===hash('sha256',$body), 'BODY_MISMATCH');
    dc_require(($op==='write' || $op==='write_php') || $body==='', 'UNEXPECTED_BODY');
    $range=dc_range($p);
    dc_require(!array_key_exists('offset',$p) && !array_key_exists('max_bytes',$p) && !array_key_exists('if_sha256',$p), 'UNEXPECTED_RANGE_FIELDS');
    dc_require(isset($p['digest']) && dc_intent_digest($p)===$p['digest'], 'INTENT_MISMATCH');
    $rel=dc_path($p['path']); if ($op!=='status') dc_allowed_path($rel,$policy,$op==='write_php');
    if ($mut) {
        dc_require($rel!=='' && isset($p['approval']) && is_string($p['approval']) && preg_match('/^[A-Za-z0-9_-]{16,128}$/',$p['approval']), 'APPROVAL_REQUIRED');
        dc_require($p['expected']==='ABSENT' || (is_string($p['expected']) && preg_match('/^[a-f0-9]{64}$/',$p['expected'])), 'PRECONDITION_REQUIRED');
        if ($op==='mkdir') dc_require($p['expected']==='ABSENT','PRECONDITION_REQUIRED');
        $ext=strtolower(pathinfo($rel, PATHINFO_EXTENSION));
        if ($op==='write_php') dc_require($ext==='php' && substr($rel,-4)==='.php', 'PHP_EXTENSION_REQUIRED');
        else dc_require(!preg_match('/^(php[0-9]*|phtml|phar|cgi|pl|py|sh|bash|zsh|exe|dll|so|htaccess)$/',$ext), 'CODE_REQUIRES_DEDICATED_GRANT');
    }
    $state=$cfg['state_dir'];
    $lock=fopen($state.'/lock','c'); dc_require($lock!==false && flock($lock,LOCK_EX), 'LOCK_FAILED');
    $ledgerFile=$state.'/ledger.json';
    $ledger=file_exists($ledgerFile)?json_decode(file_get_contents($ledgerFile),true):array('nonces'=>array(),'requests'=>array());
    dc_require(is_array($ledger) && isset($ledger['nonces'],$ledger['requests']) && is_array($ledger['nonces']) && is_array($ledger['requests']), 'STATE_CORRUPT');
    foreach($ledger['nonces'] as $n=>$expiry) if($expiry<$now) unset($ledger['nonces'][$n]);
    dc_require(count($ledger['nonces'])<10000,'STATE_MAINTENANCE_REQUIRED');
    $nonce=hash('sha256',$p['kid'].'|'.$p['nonce']);
    dc_require(!isset($ledger['nonces'][$nonce]), 'REPLAY');
    $ledger['nonces'][$nonce]=$now+600;
    dc_save($ledgerFile,$ledger);
    $result=array('ok'=>true,'audience'=>$cfg['audience'],'request_id'=>$p['request_id'],'digest'=>$p['digest']);
    if ($op==='ping') return $result+array('profile'=>'DIRECT_POLICY_1','scope'=>$cfg['scope'],'ops'=>$policy['ops'],'max_bytes'=>4000000,'php_version'=>PHP_VERSION);
    if ($op==='status') {
        dc_require(is_string($p['lookup']) && preg_match('/^[a-f0-9]{32}$/',$p['lookup']), 'LOOKUP_REQUIRED');
        $entry=isset($ledger['requests'][$p['lookup']])?$ledger['requests'][$p['lookup']]:null;
        if ($entry===null) return $result+array('receipt'=>null,'receipt_authorization'=>null);
        $required=array('receipt_version','profile','kid','audience','scope','actor','method','op','path','size','sha256','expected','request_id','expires','lookup','digest','policy_class','policy_sha256','state');
        foreach($required as $k) dc_require(array_key_exists($k,$entry),'LEGACY_RECEIPT_UNVERIFIABLE');
        dc_require($entry['receipt_version']===2 && $entry['profile']==='DIRECT_POLICY_1' && $entry['actor']===$p['actor'], 'STATUS_FORBIDDEN');
        dc_require($entry['audience']===$cfg['audience'] && $entry['scope']===$cfg['scope'] && $entry['request_id']===$p['lookup'], 'STATUS_FORBIDDEN');
        dc_require($p['path']==='' || $p['path']===$entry['path'], 'STATUS_FORBIDDEN');
        dc_require(in_array($entry['op'],$policy['ops'],true),'OP_NOT_GRANTED');
        dc_require($entry['policy_class']==='paths' || $entry['policy_class']==='php_paths','LEGACY_RECEIPT_UNVERIFIABLE');
        dc_allowed_path($entry['path'],$policy,$entry['policy_class']==='php_paths');
        $currentPolicyHash=dc_policy_hash($p['kid'],$policy);
        $auth=array(
            'current_kid'=>$p['kid'],
            'current_policy_sha256'=>$currentPolicyHash,
            'key_rotated'=>$entry['kid']!==$p['kid'],
            'policy_changed'=>$entry['policy_sha256']!==$currentPolicyHash
        );
        return $result+array('receipt'=>$entry,'receipt_authorization'=>$auth);
    }
    if ($mut && isset($ledger['requests'][$p['request_id']])) {
        $old=$ledger['requests'][$p['request_id']];
        dc_require($old['digest']===$p['digest'], 'IDEMPOTENCY_CONFLICT');
        dc_require($old['state']==='done','INDETERMINATE_RECONCILE');
        return $old['result'];
    }
    $target=dc_target($root,$rel);
    if ($op==='list') {
        dc_require(is_dir($target),'NOT_DIRECTORY'); $items=array(); $unsupported=0;
        $names=scandir($target); dc_require(is_array($names),'LIST_FAILED');
        foreach($names as $name) {
            if ($name === '.' || $name === '..') continue;
            $child=$rel===''?$name:$rel.'/'.$name;
            try { dc_allowed_path($child,$policy,false); $full=dc_target($root,$child); }
            catch(Exception $e) {
                if ($e->getMessage() === 'INVALID_PATH') { $unsupported++; continue; }
                if (in_array($e->getMessage(),array('PROTECTED_PATH','PATH_NOT_GRANTED','SYMLINK_FORBIDDEN','SPECIAL_FILE_FORBIDDEN'),true)) continue;
                throw $e;
            }
            $items[]=array('path'=>$child,'type'=>is_dir($full)?'dir':'file');
            dc_require(count($items)<=1000,'LIST_TOO_LARGE');
        }
        return $result+array('items'=>$items,'complete'=>$unsupported === 0,'completeness_scope'=>'authorized_entries','unsupported_names'=>$unsupported,'truncated'=>false,'pagination'=>array('mode'=>'none','limit'=>1000,'next_cursor'=>null));
    }
    if ($op==='stat' || $op==='read') {
        dc_require(file_exists($target),'NOT_FOUND');
        if(is_dir($target)) { dc_require($op==='stat','NOT_FILE'); $st=lstat($target); dc_require(is_array($st),'STAT_FAILED'); return $result+array('type'=>'dir','mtime'=>(int)$st['mtime'],'mode'=>sprintf('%04o',$st['mode'] & 0777)); }
        return $result+dc_read_file($target,$op,$range);
    }
    dc_precondition($target,$p['expected']);
    $oldMeta=$p['expected']==='ABSENT' ? null : dc_metadata($target);
    $mode=$oldMeta===null ? dc_creation_mode($policy,$rel,$op==='mkdir') : ($oldMeta['mode'] & 0777);
    dc_require(count($ledger['requests'])<10000,'STATE_MAINTENANCE_REQUIRED');
    $entry=array('receipt_version'=>2,'profile'=>'DIRECT_POLICY_1','kid'=>$p['kid'],'audience'=>$cfg['audience'],'scope'=>$cfg['scope'],'actor'=>$p['actor'],'method'=>'POST','op'=>$op,'path'=>$rel,'size'=>$p['size'],'sha256'=>$p['sha256'],'expected'=>$p['expected'],'request_id'=>$p['request_id'],'expires'=>$p['expires'],'lookup'=>'','digest'=>$p['digest'],'policy_class'=>$op==='write_php'?'php_paths':'paths','policy_sha256'=>dc_policy_hash($p['kid'],$policy),'state'=>'pending');
    $ledger['requests'][$p['request_id']]=$entry; dc_save($ledgerFile,$ledger);
    if($op==='mkdir') {
        dc_require(mkdir($target,0700,false),'MKDIR_FAILED');
        dc_require(chmod($target,$mode),'MODE_FAILED');
        clearstatcache(true,$target); dc_require((fileperms($target) & 0777)===$mode,'MODE_FAILED');
        $result+=array('created'=>true,'type'=>'dir','mode'=>sprintf('%04o',$mode));
    } else {
        if($p['expected']!=='ABSENT') {
            $old=file_get_contents($target); dc_require(is_string($old) && hash('sha256',$old)===$p['expected'],'PRECONDITION_CONFLICT');
            $backup=$state.'/'.$p['request_id'].'.previous';
            dc_require(!file_exists($backup) && file_put_contents($backup,$old,LOCK_EX)===strlen($old),'BACKUP_FAILED');
            dc_require(chmod($backup,0600) && hash_file('sha256',$backup)===$p['expected'],'BACKUP_FAILED');
        }
        $tmp=tempnam(dirname($target),'.direct-'); dc_require($tmp!==false,'TEMP_FAILED');
        try {
            dc_require(chmod($tmp,0600) && file_put_contents($tmp,$body,LOCK_EX)===strlen($body) && hash_file('sha256',$tmp)===$p['sha256'],'WRITE_FAILED');
            dc_target($root,$rel); dc_precondition($target,$p['expected']);
            if ($oldMeta!==null) dc_require(dc_metadata_equal($oldMeta,dc_metadata($target)),'METADATA_CHANGED');
            dc_apply_metadata($tmp,$mode,$oldMeta);
            if($p['expected']==='ABSENT') {
                dc_require(link($tmp,$target),'CREATE_CONFLICT'); dc_require(unlink($tmp),'TEMP_CLEANUP_FAILED');
            } else dc_require(rename($tmp,$target),'RENAME_FAILED');
        } catch(Exception $e) { if(is_file($tmp)) @unlink($tmp); throw $e; }
        clearstatcache(true,$target);
        dc_require(hash_file('sha256',$target)===$p['sha256'] && filesize($target)===$p['size'] && (fileperms($target) & 0777)===$mode,'VERIFY_FAILED');
        $result+=array('sha256'=>$p['sha256'],'size'=>$p['size'],'verified'=>true,'created'=>$p['expected']==='ABSENT','mode'=>sprintf('%04o',$mode));
    }
    $ledger['requests'][$p['request_id']]['state']='done';
    $ledger['requests'][$p['request_id']]['result']=$result; dc_save($ledgerFile,$ledger);
    return $result;
}
