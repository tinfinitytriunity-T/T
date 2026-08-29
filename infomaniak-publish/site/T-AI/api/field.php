<?php
require dirname(__DIR__) . '/inc/edge.php';
if (!isset($_SERVER['REQUEST_METHOD']) || strtoupper($_SERVER['REQUEST_METHOD']) !== 'POST') tai_json_response(array('error'=>'METHOD_NOT_ALLOWED'), 405);
$rate = tai_rate_limit('public_field', 12, 60);
$p = tai_json_input(120000);
$q = trim(isset($p['q']) ? (string)$p['q'] : (isset($p['question']) ? (string)$p['question'] : ''));
if ($q === '') tai_json_response(array('error'=>'QUESTION_REQUIRED'), 400);
if (tai_text_len($q) > 9000) tai_json_response(array('error'=>'QUESTION_TOO_LARGE','max'=>9000), 413);
$ctxJson = isset($p['context']) ? json_encode($p['context']) : '';
tai_public_data_guard($q . ' ' . $ctxJson);
$r = tai_http_json($apiBase . '/api/public/field', 'POST', $p, array(), 45);
if ($r['ok']) { $d=$r['data']; $d['edge_rate_limit']=$rate; tai_json_response($d, $r['status']); }
$reg = isset($p['regime']) ? strtoupper((string)$p['regime']) : 'SINGLE';
$refs = (isset($p['portances']) && is_array($p['portances'])) ? $p['portances'] : array();
$canFallback = ($reg === 'SINGLE' && (count($refs) === 0 || (count($refs) === 1 && tai_is_gemini_ref($refs[0]))));
if (!$canFallback) tai_json_response(array('error'=>'FIELD_TEMPORARILY_UNAVAILABLE','upstream_status'=>$r['status'],'single_gemini_fallback'=>true,'winner'=>null,'vote'=>null,'global_score'=>null), 503);
$context = isset($p['context']) ? tai_text_cut(json_encode($p['context']), 42000) : '';
$payload = array('q'=>$q); if ($context !== '') $payload['context']=$context;
$legacy = tai_http_json($stableApiBase . '/api/read/ask', 'POST', $payload, array(), 40);
if (!$legacy['ok']) tai_json_response(array('error'=>'M4_STABLE_UNAVAILABLE','upstream_status'=>$legacy['status']), 503);
tai_json_response(array('surface'=>'NEPHESH_EDGE_DEGRADED_SINGLE','milestone'=>'M4_STABLE','answer'=>isset($legacy['data']['answer'])?$legacy['data']['answer']:null,'provider'=>'google','model'=>isset($legacy['data']['model'])?$legacy['data']['model']:'gemini-3.6-flash','regime'=>'SINGLE','voices'=>array(),'weave'=>null,'edge_rate_limit'=>$rate,'winner'=>null,'vote'=>null,'global_score'=>null,'automatic_optimization'=>false), 200);
