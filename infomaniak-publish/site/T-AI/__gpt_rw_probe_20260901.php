<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
function gpt_rw_probe_cleanup() { @unlink(__FILE__); }
register_shutdown_function('gpt_rw_probe_cleanup');
$web = dirname(dirname(__DIR__));
$root = $web . '/T-LAB';
$target = $root . '/.gpt-rw-test-20260901.txt';
$content = 'T-LAB-RW-OK-20260901';
$out = array('ok'=>false,'wrote'=>false,'verified'=>false,'cleaned'=>false);
if (!is_dir($root)) { $out['error']='root_not_directory'; echo json_encode($out); exit; }
if (!is_writable($root)) { $out['error']='root_not_writable'; echo json_encode($out); exit; }
$n = @file_put_contents($target, $content);
if ($n === false || $n != strlen($content)) { $out['error']='write_failed'; @unlink($target); echo json_encode($out); exit; }
$out['wrote'] = true;
$got = @file_get_contents($target);
$out['verified'] = ($got === $content);
$out['cleaned'] = @unlink($target) ? true : false;
$out['ok'] = ($out['wrote'] && $out['verified'] && $out['cleaned']);
echo json_encode($out);
