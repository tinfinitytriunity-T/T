<?php
require dirname(__DIR__) . '/inc/edge.php';
$method = isset($_SERVER['REQUEST_METHOD']) ? strtoupper($_SERVER['REQUEST_METHOD']) : 'GET';
if ($method !== 'GET' && $method !== 'POST') tai_json_response(array('error'=>'METHOD_NOT_ALLOWED'), 405);
$rate = tai_rate_limit('stable_read', 20, 60);
$p = $method === 'POST' ? tai_json_input(120000) : $_GET;
$q = trim(isset($p['q']) ? (string)$p['q'] : (isset($p['question']) ? (string)$p['question'] : ''));
if ($q === '') tai_json_response(array('error'=>'QUESTION_REQUIRED'), 400);
if (tai_text_len($q) > 9000) tai_json_response(array('error'=>'QUESTION_TOO_LARGE','max'=>9000), 413);
$context = isset($p['context']) ? tai_text_cut((string)$p['context'], 42000) : '';
tai_public_data_guard($q . ' ' . $context);
$payload = array('q'=>$q);
if ($context !== '') $payload['context'] = $context;
$r = tai_http_json($stableApiBase . '/api/read/ask', 'POST', $payload, array(), 40);
if (!$r['ok']) tai_json_response(array('error'=>'M4_STABLE_UNAVAILABLE','upstream_status'=>$r['status']), 503);
$d = $r['data']; $d['edge_route']='NEPHESH_SAME_ORIGIN'; $d['edge_rate_limit']=$rate;
tai_json_response($d, $r['status']);
