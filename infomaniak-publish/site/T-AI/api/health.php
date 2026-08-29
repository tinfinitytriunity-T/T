<?php
declare(strict_types=1);require dirname(__DIR__).'/inc/edge.php';tai_rate_limit('health',60,60);
$r=tai_http_json($apiBase.'/api/health','GET',null,[],5);
if($r['ok']){$d=$r['data'];$d['edge_route']='NEPHESH_SAME_ORIGIN';$d['edge_fallback']=false;tai_json_response($d,200);}
$s=tai_http_json($stableApiBase.'/api/health','GET',null,[],5);
if($s['ok']){$d=$s['data'];$model=$d['gemini_model']??'gemini-3.6-flash';$d['live_active_count']=1;$d['models']=[$model];$d['providers']=['google'];$d['canary_extension']=['available'=>false,'name'=>'FIELD unavailable','nephesh_public'=>['field'=>false],'nephesh_lab'=>['field'=>false]];$d['edge_route']='NEPHESH_SAME_ORIGIN';$d['edge_fallback']=true;tai_json_response($d,200);}
tai_json_response(['status'=>'unavailable','error'=>'ALL_UPSTREAMS_UNAVAILABLE','edge_route'=>'NEPHESH_SAME_ORIGIN'],503);
