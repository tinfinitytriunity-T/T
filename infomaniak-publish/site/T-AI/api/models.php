<?php
declare(strict_types=1);require dirname(__DIR__).'/inc/edge.php';tai_rate_limit('models',40,60);
$r=tai_http_json($apiBase.'/api/public/models','GET',null,[],6);if($r['ok'])tai_json_response($r['data']);
$health=tai_http_json($stableApiBase.'/api/health','GET',null,[],5);$portances=[];
if($health['ok']&&!empty($health['data']['gemini_configured']))$portances[]=['id'=>'legacy_gemini','label'=>'Gemini 3.6 Flash','family'=>'gemini','provider'=>'google','model'=>$health['data']['gemini_model']??'gemini-3.6-flash','transport'=>'M4_STABLE_FALLBACK','available_free'=>true,'inference_ready'=>true,'ref'=>['kind'=>'legacy_gemini']];
tai_json_response(['surface'=>'NEPHESH_EDGE_FALLBACK','field_backend_deployed'=>false,'portances'=>$portances,'winner'=>null,'vote'=>null,'global_score'=>null,'automatic_optimization'=>false]);
