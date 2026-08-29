<?php
require dirname(__DIR__) . '/inc/edge.php';
tai_rate_limit('models', 30, 60);
$r = tai_field_models();
tai_json_response($r['data'], $r['status']);
