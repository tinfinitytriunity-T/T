<?php
require dirname(__DIR__) . '/inc/edge.php';
tai_rate_limit('health', 60, 60);
$h = tai_effective_health();
tai_json_response($h['data'], $h['status']);
