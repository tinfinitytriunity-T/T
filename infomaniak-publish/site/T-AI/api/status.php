<?php
declare(strict_types=1);require dirname(__DIR__).'/inc/edge.php';tai_rate_limit('status',30,60);
$health=tai_http_json($apiBase.'/api/health','GET',null,[],8);$fieldModels=tai_http_json($apiBase.'/api/public/models','GET',null,[],8);$catalog=tai_gateway_free_models(32);
$h=$health['data'];$live=[];
if($health['ok']&&isset($h['live_active_count'],$h['models'])){
  $providers=is_array($h['providers']??null)?$h['providers']:[];
  foreach((array)$h['models'] as $i=>$model)$live[]=['provider'=>$providers[$i]??'unknown','model'=>$model,'path'=>$h['milestone']??'FIELD_CANARY'];
}elseif($health['ok']&&!empty($h['gemini_configured']))$live[]=['provider'=>'gemini','model'=>$h['gemini_model']??'unknown','path'=>'M4_STABLE'];
$fieldReady=[];if($fieldModels['ok'])foreach(($fieldModels['data']['portances']??[]) as $p)if(($p['inference_ready']??$p['available_free']??false)===true)$fieldReady[]=$p;
$freeCount=count($catalog['models']);$freeCapped=$freeCount>=32;
tai_json_response(['status'=>'ok','surface'=>'NEPHESH_EDGE_STATUS','checked_at'=>gmdate('c'),'production'=>['reachable'=>$health['ok'],'milestone'=>$h['milestone']??null,'extension'=>$h['extension']??null,'live_active_count'=>count($live),'live_active'=>$live],'field'=>['backend_deployed'=>$fieldModels['ok'],'ready_count'=>count($fieldReady),'ready_portances'=>$fieldReady,'endpoint_status'=>$fieldModels['status']],'gateway'=>['catalog_reachable'=>$catalog['ok'],'free_discovered_count'=>$freeCount,'free_discovered_capped'=>$freeCapped,'free_discovered_models'=>$catalog['models']],'counts'=>['live_active'=>count($live),'field_ready'=>count($fieldReady),'free_discovered'=>$freeCount],'winner'=>null,'vote'=>null,'global_score'=>null,'automatic_optimization'=>false]);
