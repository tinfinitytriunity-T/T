<?php
require dirname(__DIR__) . '/inc/edge.php';
require dirname(__DIR__) . '/inc/step.php';
tai_rate_limit('models',30,60);$r=tai_field_models();$d=tai_step_augment_models($r['data']);tai_json_response($d,200);
