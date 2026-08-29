<?php
require_once __DIR__ . '/common.php';

function tai_json_response($body, $status) {
  if (function_exists('http_response_code')) http_response_code((int)$status);
  else header('X-PHP-Response-Code: ' . (int)$status, true, (int)$status);
  header('Content-Type: application/json; charset=utf-8');
  header('Cache-Control: no-store, private, max-age=0');
  header('X-Content-Type-Options: nosniff');
  header('X-Robots-Tag: noindex, nofollow, noarchive');
  echo json_encode($body);
  exit;
}
function tai_json_input($maxBytes) {
  $len = isset($_SERVER['CONTENT_LENGTH']) ? (int)$_SERVER['CONTENT_LENGTH'] : 0;
  if ($len > $maxBytes) tai_json_response(array('error'=>'PAYLOAD_TOO_LARGE','max_bytes'=>$maxBytes), 413);
  $raw = file_get_contents('php://input');
  if ($raw === false || $raw === '') return array();
  $data = json_decode($raw, true);
  if (!is_array($data)) tai_json_response(array('error'=>'INVALID_JSON'), 400);
  return $data;
}
function tai_text_len($s) { return function_exists('mb_strlen') ? mb_strlen($s, 'UTF-8') : strlen($s); }
function tai_text_cut($s, $max) { return function_exists('mb_substr') ? mb_substr($s, 0, $max, 'UTF-8') : substr($s, 0, $max); }
function tai_client_ip() {
  $vals = array(
    isset($_SERVER['HTTP_CF_CONNECTING_IP']) ? $_SERVER['HTTP_CF_CONNECTING_IP'] : '',
    isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : '',
    isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDS'] : ''
  );
  foreach ($vals as $v) {
    $parts = explode(',', (string)$v);
    $ip = trim($parts[0]);
    if (filter_var($ip, FILTER_VALIDATE_IP)) return $ip;
  }
  return 'unknown';
}
function tai_rate_limit($scope, $limit, $window) {
  $key = hash('sha256', $scope . '|' . tai_client_ip());
  $file = sys_get_temp_dir() . '/tai_rl_' . $key . '.json';
  $now = time();
  $state = array('start'=>$now,'count'=>0);
  $fh = @fopen($file, 'c+');
  if (!$fh) return array('limit'=>$limit,'remaining'=>null,'window_s'=>$window,'mode'=>'best_effort_unavailable');
  if (@flock($fh, LOCK_EX)) {
    rewind($fh);
    $raw = stream_get_contents($fh);
    $x = json_decode($raw ? $raw : '{}', true);
    if (is_array($x) && isset($x['start']) && isset($x['count'])) $state = $x;
    if ($now - (int)$state['start'] >= $window) $state = array('start'=>$now,'count'=>0);
    $state['count'] = (int)$state['count'] + 1;
    if ($state['count'] > $limit) {
      @flock($fh, LOCK_UN); @fclose($fh);
      tai_json_response(array('error'=>'RATE_LIMITED','retry_after_s'=>max(1, $window - ($now - (int)$state['start']))), 429);
    }
    ftruncate($fh, 0); rewind($fh); fwrite($fh, json_encode($state)); fflush($fh); @flock($fh, LOCK_UN);
  }
  @fclose($fh);
  return array('limit'=>$limit,'remaining'=>max(0,$limit-(int)$state['count']),'window_s'=>$window,'mode'=>'instance_local_file');
}
function tai_http_json($url, $method, $payload, $headers, $timeout) {
  $baseHeaders = array('Accept: application/json');
  if ($payload !== null) $baseHeaders[] = 'Content-Type: application/json';
  if (is_array($headers)) foreach ($headers as $k=>$v) $baseHeaders[] = $k . ': ' . $v;
  if (function_exists('curl_init')) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_TIMEOUT, (int)$timeout);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $baseHeaders);
    curl_setopt($ch, CURLOPT_USERAGENT, 'T-AI-Nephesh-Edge/4.3.10.3');
    if ($payload !== null) curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    $raw = curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    if ($raw === false) return array('ok'=>false,'status'=>0,'data'=>array('error'=>'UPSTREAM_UNAVAILABLE','detail'=>$error));
    $data = json_decode($raw, true);
    if (!is_array($data)) $data = array('raw'=>substr((string)$raw,0,1200));
    return array('ok'=>($status>=200 && $status<300),'status'=>$status,'data'=>$data);
  }
  $opts = array('http'=>array('method'=>$method,'timeout'=>(int)$timeout,'ignore_errors'=>true,'header'=>implode("\r\n",$baseHeaders)));
  if ($payload !== null) $opts['http']['content'] = json_encode($payload);
  $raw = @file_get_contents($url, false, stream_context_create($opts));
  $status = 0;
  if (isset($http_response_header) && is_array($http_response_header)) {
    foreach ($http_response_header as $h) if (preg_match('~^HTTP/\\S+\\s+(\\d{3})~',$h,$m)) $status=(int)$m[1];
  }
  if ($raw === false) return array('ok'=>false,'status'=>$status,'data'=>array('error'=>'UPSTREAM_UNAVAILABLE'));
  $data = json_decode($raw, true);
  if (!is_array($data)) $data = array('raw'=>substr((string)$raw,0,1200));
  return array('ok'=>($status>=200 && $status<300),'status'=>$status,'data'=>$data);
}
function tai_public_data_guard($text) {
  $patterns = array(
    '/(?:sk|gsk|AIza|xai|hf)_[A-Za-z0-9_\\-]{16,}/i',
    '/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/',
    '/\\bBearer\\s+[A-Za-z0-9._\\-]{16,}/i',
    '/\\b(?:password|passwd|secret|api[_ -]?key)\\s*[:=]\\s*\\S{8,}/i'
  );
  foreach ($patterns as $p) if (preg_match($p, $text)) tai_json_response(array('error'=>'PUBLIC_DATA_ONLY_SECRET_PATTERN','fail_closed'=>true), 400);
}
function tai_lab_open() {
  if (session_id() === '') @session_start();
  return isset($_SESSION['tai_lab']) && $_SESSION['tai_lab'] === true;
}
function tai_ref_id($ref) {
  if (is_string($ref)) return $ref;
  if (is_array($ref)) {
    if (isset($ref['id'])) return (string)$ref['id'];
    if (isset($ref['kind'])) return (string)$ref['kind'];
  }
  return '';
}
function tai_is_gemini_ref($ref) {
  $id = strtolower(tai_ref_id($ref));
  return $id === '' || $id === 'legacy_gemini' || $id === 'gemini_36' || $id === 'gemini';
}
function tai_effective_health() {
  global $apiBase, $stableApiBase;
  $r = tai_http_json($apiBase . '/api/health', 'GET', null, array(), 7);
  if ($r['ok']) {
    $d = $r['data'];
    $d['edge_route'] = 'NEPHESH_SAME_ORIGIN';
    $d['edge_fallback'] = false;
    return array('ok'=>true,'status'=>200,'data'=>$d,'primary'=>true);
  }
  $s = tai_http_json($stableApiBase . '/api/health', 'GET', null, array(), 7);
  if ($s['ok']) {
    $d = $s['data'];
    $model = isset($d['gemini_model']) ? $d['gemini_model'] : 'gemini-3.6-flash';
    $d['live_active_count'] = 1;
    $d['models'] = array($model);
    $d['providers'] = array('google');
    $d['canary_extension'] = array('available'=>false,'name'=>'FIELD unavailable','nephesh_public'=>array('field'=>false),'nephesh_lab'=>array('field'=>false));
    $d['edge_route'] = 'NEPHESH_SAME_ORIGIN';
    $d['edge_fallback'] = true;
    return array('ok'=>true,'status'=>200,'data'=>$d,'primary'=>false);
  }
  return array('ok'=>false,'status'=>503,'data'=>array('status'=>'unavailable','error'=>'ALL_UPSTREAMS_UNAVAILABLE','edge_route'=>'NEPHESH_SAME_ORIGIN'),'primary'=>false);
}
function tai_field_models() {
  global $apiBase;
  $r = tai_http_json($apiBase . '/api/public/models', 'GET', null, array(), 8);
  if ($r['ok']) {
    $d = $r['data'];
    $d['field_backend_deployed'] = true;
    return array('ok'=>true,'status'=>200,'data'=>$d,'backend'=>true);
  }
  $h = tai_effective_health();
  $portances = array();
  if ($h['ok']) {
    $model = isset($h['data']['gemini_model']) ? $h['data']['gemini_model'] : 'gemini-3.6-flash';
    $portances[] = array('id'=>'legacy_gemini','label'=>'Gemini 3.6 · secours','provider'=>'google','family'=>'gemini','model'=>$model,'ref'=>'legacy_gemini','available_free'=>true,'inference_ready'=>true,'free_verification'=>'M4_STABLE_LIVE');
  }
  return array('ok'=>true,'status'=>200,'data'=>array('surface'=>'NEPHESH_EDGE_FALLBACK','field_backend_deployed'=>false,'portances'=>$portances,'winner'=>null,'vote'=>null,'global_score'=>null,'automatic_optimization'=>false),'backend'=>false);
}
