<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-Robots-Tag: noindex, nofollow, noarchive');
register_shutdown_function(static function (): void {
    @unlink(__FILE__);
});

$webRoot = dirname(__DIR__, 2);
$target = $webRoot . '/T-LAB/DossiersArchives';
$out = [
    'ok' => false,
    'target' => '/web/T-LAB/DossiersArchives/',
    'count' => 0,
    'entries' => [],
];

if (!is_dir($target)) {
    http_response_code(404);
    $out['error'] = 'target_not_directory';
    echo json_encode($out, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}
if (!is_readable($target)) {
    http_response_code(403);
    $out['error'] = 'target_not_readable';
    echo json_encode($out, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

try {
    $baseLen = strlen(rtrim($target, DIRECTORY_SEPARATOR)) + 1;
    $it = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($target, FilesystemIterator::SKIP_DOTS),
        RecursiveIteratorIterator::SELF_FIRST
    );
    foreach ($it as $info) {
        $path = $info->getPathname();
        $rel = substr($path, $baseLen);
        if ($rel === false || $rel === '') {
            continue;
        }
        $type = $info->isDir() ? 'dir' : ($info->isFile() ? 'file' : 'other');
        $entry = [
            'path' => str_replace(DIRECTORY_SEPARATOR, '/', $rel),
            'type' => $type,
            'mtime' => $info->getMTime(),
        ];
        if ($info->isFile()) {
            $entry['size'] = $info->getSize();
        }
        $out['entries'][] = $entry;
        if (count($out['entries']) >= 5000) {
            $out['truncated'] = true;
            break;
        }
    }
    usort($out['entries'], static fn(array $a, array $b): int => strcmp($a['path'], $b['path']));
    $out['count'] = count($out['entries']);
    $out['ok'] = true;
} catch (Throwable $e) {
    http_response_code(500);
    $out['error'] = 'scan_failed';
    $out['error_class'] = get_class($e);
}

echo json_encode($out, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
