<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-Robots-Tag: noindex, nofollow, noarchive');
register_shutdown_function(function () {
    @unlink(__FILE__);
});

$webRoot = dirname(dirname(__DIR__));
$target = $webRoot . '/T-LAB/DossiersArchives';
$out = array(
    'ok' => false,
    'target' => '/web/T-LAB/DossiersArchives/',
    'count' => 0,
    'entries' => array()
);

function scan_da_tree($base, $dir, &$entries, $limit) {
    $items = @scandir($dir);
    if ($items === false) {
        return false;
    }
    foreach ($items as $name) {
        if ($name === '.' || $name === '..') {
            continue;
        }
        $path = $dir . DIRECTORY_SEPARATOR . $name;
        $rel = substr($path, strlen(rtrim($base, DIRECTORY_SEPARATOR)) + 1);
        if (is_dir($path)) {
            $entries[] = array(
                'path' => str_replace(DIRECTORY_SEPARATOR, '/', $rel),
                'type' => 'dir',
                'mtime' => @filemtime($path)
            );
            if (count($entries) >= $limit) {
                return true;
            }
            if (!scan_da_tree($base, $path, $entries, $limit)) {
                return false;
            }
        } elseif (is_file($path)) {
            $entries[] = array(
                'path' => str_replace(DIRECTORY_SEPARATOR, '/', $rel),
                'type' => 'file',
                'mtime' => @filemtime($path),
                'size' => @filesize($path)
            );
            if (count($entries) >= $limit) {
                return true;
            }
        } else {
            $entries[] = array(
                'path' => str_replace(DIRECTORY_SEPARATOR, '/', $rel),
                'type' => 'other',
                'mtime' => @filemtime($path)
            );
        }
    }
    return true;
}

if (!is_dir($target)) {
    $out['error'] = 'target_not_directory';
    echo json_encode($out);
    exit;
}
if (!is_readable($target)) {
    $out['error'] = 'target_not_readable';
    echo json_encode($out);
    exit;
}

$entries = array();
$ok = scan_da_tree($target, $target, $entries, 5000);
usort($entries, function ($a, $b) {
    return strcmp($a['path'], $b['path']);
});
$out['entries'] = $entries;
$out['count'] = count($entries);
$out['ok'] = $ok;
if (count($entries) >= 5000) {
    $out['truncated'] = true;
}
if (!$ok) {
    $out['error'] = 'scan_failed';
}
echo json_encode($out);
