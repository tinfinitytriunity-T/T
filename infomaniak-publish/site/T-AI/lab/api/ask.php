<?php
require dirname(dirname(__DIR__)) . '/inc/edge.php';
require dirname(dirname(__DIR__)) . '/inc/step.php';
$marker=isset($_SERVER['HTTP_X_TAI_LAB_ACCESS'])?(string)$_SERVER['HTTP_X_TAI_LAB_ACCESS']:'';if($marker!=='TAI'&&!tai_lab_open())tai_json_response(array('error'=>'LAB_MARKER_REQUIRED'),403);if(!isset($_SERVER['REQUEST_METHOD'])||strtoupper($_SERVER['REQUEST_METHOD'])!=='POST')tai_json_response(array('error'=>'METHOD_NOT_ALLOWED'),405);$rate=tai_rate_limit('lab_field',30,60);$p=tai_json_input(220000);$r=tai_step_run_field($p,true,$rate);tai_json_response($r['body'],$r['status']);
