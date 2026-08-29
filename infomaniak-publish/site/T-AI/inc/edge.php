<?php
declare(strict_types=1);
require_once __DIR__.'/common.php';

function tai_json_response(array $body,int $status=200): never {
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  header('Cache-Control: no-store, private, max-age=0');
  header('X-Content-Type-Options: nosniff');
  header('X-Robots-Tag: noindex, nofollow, noarchive');
  echo json_encode($body,JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
  exit;
}
function tai_json_input(int $maxBytes=120000): array {
  $len=(int)($_SERVER['CONTENT_LENGTH']??0);
  if($len>$maxBytes) tai_json_response(['error'=>'PAYLOAD_TOO_LARGE','max_bytes'=>$maxBytes],413);
  $raw=file_get_contents('php://input');
  if($raw===false||$raw==='') return [];
  $data=json_decode($raw,true);
  if(!is_array($data)) tai_json_response(['error'=>'INVALID_JSON'],400);
  return $data;
}
function tai_text_len(string $s): int { return function_exists('mb_strlen')?mb_strlen($s,'UTF-8'):strlen($s); }
function tai_text_cut(string $s,int $max): string { return function_exists('mb_substr')?mb_substr($s,0,$max,'UTF-8'):substr($s,0,$max); }
function tai_client_ip(): string {
  $candidates=[$_SERVER['HTTP_CF_CONNECTING_IP']??'',$_SERVER['HTTP_X_FORWARDED_FOR']??'',$_SERVER['REMOTE_ADDR']??''];
  foreach($candidates as $v){$v=trim(explode(',',(string)$v)[0]);if(filter_var($v,FILTER_VALIDATE_IP))return $v;}
  return 'unknown';
}
function tai_rate_limit(string $scope,int $limit,int $window=60): array {
  $key=hash('sha256',$scope.'|'.tai_client_ip());$file=sys_get_temp_dir().'/tai_rl_'.$key.'.json';$now=time();$state=['start'=>$now,'count'=>0];
  $fh=@fopen($file,'c+');if(!$fh)return ['limit'=>$limit,'remaining'=>null,'window_s'=>$window,'mode'=>'best_effort_unavailable'];
  try{if(flock($fh,LOCK_EX)){rewind($fh);$raw=stream_get_contents($fh);$x=json_decode($raw?:'{}',true);if(is_array($x)&&isset($x['start'],$x['count']))$state=$x;if($now-(int)$state['start']>=$window)$state=['start'=>$now,'count'=>0];$state['count']=(int)$state['count']+1;if($state['count']>$limit){flock($fh,LOCK_UN);fclose($fh);tai_json_response(['error'=>'RATE_LIMITED','retry_after_s'=>max(1,$window-($now-(int)$state['start']))],429);}ftruncate($fh,0);rewind($fh);fwrite($fh,json_encode($state));fflush($fh);flock($fh,LOCK_UN);}}
  finally{if(is_resource($fh))@fclose($fh);}return ['limit'=>$limit,'remaining'=>max(0,$limit-(int)$state['count']),'window_s'=>$window,'mode'=>'instance_local_file'];
}
function tai_http_json(string $url,string $method='GET',?array $payload=null,array $headers=[],int $timeout=18): array {
  $baseHeaders=['Accept: application/json'];if($payload!==null)$baseHeaders[]='Content-Type: application/json';foreach($headers as $k=>$v)$baseHeaders[]=$k.': '.$v;
  if(function_exists('curl_init')){$ch=curl_init($url);curl_setopt_array($ch,[CURLOPT_RETURNTRANSFER=>true,CURLOPT_FOLLOWLOCATION=>false,CURLOPT_CONNECTTIMEOUT=>5,CURLOPT_TIMEOUT=>$timeout,CURLOPT_CUSTOMREQUEST=>$method,CURLOPT_HTTPHEADER=>$baseHeaders,CURLOPT_USERAGENT=>'T-AI-Nephesh-Edge/4.3.5']);if($payload!==null)curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($payload,JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE));$raw=curl_exec($ch);$status=(int)curl_getinfo($ch,CURLINFO_RESPONSE_CODE);$error=curl_error($ch);curl_close($ch);if($raw===false)return ['ok'=>false,'status'=>0,'data'=>['error'=>'UPSTREAM_UNAVAILABLE','detail'=>$error]];$data=json_decode($raw,true);if(!is_array($data))$data=['raw'=>substr((string)$raw,0,1200)];return ['ok'=>$status>=200&&$status<300,'status'=>$status,'data'=>$data];}
  $opts=['http'=>['method'=>$method,'timeout'=>$timeout,'ignore_errors'=>true,'header'=>implode("\r\n",$baseHeaders)]];if($payload!==null)$opts['http']['content']=json_encode($payload,JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);$raw=@file_get_contents($url,false,stream_context_create($opts));$status=0;foreach($http_response_header??[] as $h)if(preg_match('~^HTTP/\S+\s+(\d{3})~',$h,$m))$status=(int)$m[1];$data=json_decode($raw?:'',true);if(!is_array($data))$data=['raw'=>substr((string)($raw?:''),0,1200)];return ['ok'=>$status>=200&&$status<300,'status'=>$status,'data'=>$data];
}
function tai_public_data_guard(string $text): void {
  $patterns=['/(?:sk|gsk|AIza|xai|hf)_[A-Za-z0-9_\-]{16,}/i','/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/','/\bBearer\s+[A-Za-z0-9._\-]{16,}/i','/\b(?:password|passwd|secret|api[_ -]?key)\s*[:=]\s*\S{8,}/i'];
  foreach($patterns as $p)if(preg_match($p,$text))tai_json_response(['error'=>'PUBLIC_DATA_ONLY_SECRET_PATTERN','fail_closed'=>true],400);
}
function tai_is_free_chat_model(array $m): bool {
  $tags=array_map('strtolower',array_map('strval',$m['tags']??[]));$pricing=$m['pricing']??[];$type=strtolower((string)($m['type']??''));$in=array_map('strtolower',array_map('strval',$m['modalities']['input']??[]));$out=array_map('strtolower',array_map('strval',$m['modalities']['output']??[]));
  return in_array('free',$tags,true)&&isset($pricing['input'],$pricing['output'])&&(float)$pricing['input']===0.0&&(float)$pricing['output']===0.0&&$type==='language'&&in_array('text',$in,true)&&in_array('text',$out,true);
}
function tai_gateway_free_models(int $max=24): array {
  global $config; $catalogBase=rtrim((string)($config['gateway_catalog_base']??'https://ai-gateway.vercel.sh/v1'),'/');
  $r=tai_http_json($catalogBase.'/models','GET',null,[],8);if(!$r['ok'])return ['ok'=>false,'models'=>[],'status'=>$r['status']];$rows=[];foreach(($r['data']['data']??[]) as $m){if(!is_array($m)||!tai_is_free_chat_model($m))continue;$rows[]=['id'=>(string)($m['id']??''),'label'=>(string)($m['name']??$m['display_name']??$m['id']??''),'context_window'=>$m['context_window']??$m['contextWindow']??null,'max_output'=>$m['max_output']??$m['maxOutput']??null,'tags'=>$m['tags']??[],'source'=>'VERCEL_AI_GATEWAY_PUBLIC_CATALOG'];if(count($rows)>=$max)break;}usort($rows,fn($a,$b)=>strcmp($a['id'],$b['id']));return ['ok'=>true,'models'=>$rows,'status'=>$r['status']];
}
function tai_lab_open(): bool { if(session_status()!==PHP_SESSION_ACTIVE)session_start();return ($_SESSION['tai_lab']??false)===true; }
