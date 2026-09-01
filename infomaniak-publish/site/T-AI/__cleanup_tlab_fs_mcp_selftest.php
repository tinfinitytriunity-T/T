<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
register_shutdown_function(function(){ @unlink(__FILE__); });
$web=dirname(dirname(__DIR__));
$target=$web.'/T-LAB/DossiersArchives/DragonBee/TLAB_FS_MCP_SELFTEST.txt';
$existed=file_exists($target);
$deleted=$existed ? @unlink($target) : true;
echo json_encode(array('ok'=>$deleted,'existed'=>$existed,'deleted'=>$deleted));
