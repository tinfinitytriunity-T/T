<?php
require dirname(dirname(__DIR__)) . '/inc/edge.php';
require dirname(dirname(__DIR__)) . '/inc/step.php';
$marker=isset($_SERVER['HTTP_X_TAI_LAB_ACCESS'])?(string)$_SERVER['HTTP_X_TAI_LAB_ACCESS']:'';if($marker!=='TAI'&&!tai_lab_open())tai_json_response(array('error'=>'LAB_MARKER_REQUIRED'),403);tai_rate_limit('lab_models',60,60);$r=tai_http_json($apiBase.'/api/nephesh/lab/models','GET',null,array('x-tai-lab-access'=>'TAI'),10);if($r['ok'])$d=$r['data'];else{$f=tai_field_models();$d=$f['data'];}$d=tai_step_augment_models($d);tai_json_response($d,200);
