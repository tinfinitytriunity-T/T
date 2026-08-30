<?php
require dirname(__DIR__) . '/inc/edge.php';
require dirname(__DIR__) . '/inc/step.php';
tai_rate_limit('models',30,60);$r=tai_field_models();$d=tai_step_augment_models($r['data']);$d['registry_authority']='server';$d['provenance_lock']=true;$d['surface']='M4_3_10_5_PROVENANCE_LOCK_MODELS';tai_json_response($d,200);
