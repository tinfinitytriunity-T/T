<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
register_shutdown_function(function(){ @unlink(__FILE__); });
$web = dirname(__DIR__, 2);
$root = $web . '/T-LAB';
$target = $root . '/.gpt-rw-test-20260901.txt';
$content = 'T-LAB-RW-OK-20260901';
$out = array('ok'=>false,'wrote'=>false,'verified'=>false,'cleaned'=>false);
if (!is_dir($root) || !is_writable($root)) { $out['error']='root_not_writable'; echo json_encode($out); exit; }
$n = @file_put_contents($target, $content, LOCK_EX);
if ($n !== strlen($content)) { $out['error']='write_failed'; @unlink($target); echo json_encode($out); exit; }
$out['wrote'] = true;
$got = @file_get_contents($target);
$out['verified'] = ($got === $content);
$out['cleaned'] = @unlink($target);
$out['ok'] = $out['wrote'] && $out['verified'] && $out['cleaned'];
echo json_encode($out);
