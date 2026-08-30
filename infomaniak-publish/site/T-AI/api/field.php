<?php
require dirname(__DIR__) . '/inc/edge.php';
require dirname(__DIR__) . '/inc/step.php';
if (!isset($_SERVER['REQUEST_METHOD']) || strtoupper($_SERVER['REQUEST_METHOD']) !== 'POST') tai_json_response(array('error'=>'METHOD_NOT_ALLOWED'),405);
$rate=tai_rate_limit('public_field',12,60);$p=tai_json_input(120000);$r=tai_step_run_field($p,false,$rate);tai_json_response($r['body'],$r['status']);
