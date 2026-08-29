<?php
require dirname(__DIR__) . '/inc/edge.php';
tai_rate_limit('status', 30, 60);
$health = tai_effective_health();
$models = tai_field_models();
$h = $health['data'];
$live = array();
if ($health['ok'] && isset($h['live_active_count']) && isset($h['models']) && is_array($h['models'])) {
  $providers = (isset($h['providers']) && is_array($h['providers'])) ? $h['providers'] : array();
  foreach ($h['models'] as $i=>$model) $live[] = array('provider'=>isset($providers[$i])?$providers[$i]:'unknown','model'=>$model,'path'=>isset($h['milestone'])?$h['milestone']:'FIELD');
} elseif ($health['ok'] && !empty($h['gemini_configured'])) {
  $live[] = array('provider'=>'google','model'=>isset($h['gemini_model'])?$h['gemini_model']:'gemini-3.6-flash','path'=>'M4_STABLE');
}
$backend = !empty($models['data']['field_backend_deployed']);
$ready = array();
if ($backend && isset($models['data']['portances']) && is_array($models['data']['portances'])) {
  foreach ($models['data']['portances'] as $p) if (!empty($p['inference_ready']) || !empty($p['available_free'])) $ready[] = $p;
}
tai_json_response(array(
  'status'=>'ok',
  'surface'=>'NEPHESH_EDGE_STATUS',
  'checked_at'=>gmdate('c'),
  'production'=>array('reachable'=>$health['ok'],'milestone'=>isset($h['milestone'])?$h['milestone']:null,'live_active_count'=>count($live),'live_active'=>$live,'edge_fallback'=>!empty($h['edge_fallback'])),
  'field'=>array('backend_deployed'=>$backend,'ready_count'=>count($ready),'ready_portances'=>$ready),
  'counts'=>array('live_active'=>count($live),'field_ready'=>count($ready)),
  'winner'=>null,'vote'=>null,'global_score'=>null,'automatic_optimization'=>false
), 200);
