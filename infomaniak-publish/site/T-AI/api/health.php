<?php
require dirname(__DIR__) . '/inc/edge.php';
require dirname(__DIR__) . '/inc/step.php';
tai_rate_limit('health',60,60);$h=tai_effective_health();$d=tai_step_augment_health($h['data']);tai_json_response($d,$h['status']);
