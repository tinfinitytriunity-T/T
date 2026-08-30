<?php
require dirname(__DIR__) . '/inc/edge.php';
require dirname(__DIR__) . '/inc/step.php';
tai_rate_limit('health',60,60);$h=tai_effective_health();$d=tai_step_augment_health($h['data']);$d['upstream_edge_milestone']=isset($d['milestone'])?$d['milestone']:null;$d['milestone']='M4_3_10_5_PROVENANCE_LOCK_EDGE';$d['registry_authority']='server';$d['provenance_lock']=true;tai_json_response($d,$h['status']);
