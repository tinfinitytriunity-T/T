<?php
declare(strict_types=1);require dirname(__DIR__).'/inc/edge.php';tai_rate_limit('models',30,60);
$r=tai_http_json($apiBase.'/api/public/models','GET',null,[],8);if($r['ok'])tai_json_response($r['data']);
$health=tai_http_json($apiBase.'/api/health','GET',null,[],8);$catalog=tai_gateway_free_models(32);$portances=[];
if($health['ok']&&!empty($health['data']['gemini_configured']))$portances[]=['id'=>'legacy_gemini','label'=>'Gemini 3.6 · live M4','model'=>$health['data']['gemini_model']??'gemini-3.6-flash','provider_pin'=>'google','available_free'=>true,'inference_ready'=>true,'free_verification'=>'M4_STABLE_LIVE','ref'=>['kind'=>'legacy_gemini']];
tai_json_response(['surface'=>'NEPHESH_PUBLIC_EDGE_FALLBACK','field_backend_deployed'=>false,'public_data_only'=>true,'cost_policy'=>'FREE_ONLY','portances'=>$portances,'discovered_free'=>$catalog['models'],'discovered_free_count'=>count($catalog['models']),'winner'=>null,'vote'=>null,'global_score'=>null,'automatic_optimization'=>false]);
