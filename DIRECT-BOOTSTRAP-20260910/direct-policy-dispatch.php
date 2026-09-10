<?php
function dc_dispatch($site, $computedRoot) {
    ini_set('display_errors', '0');
    header('Content-Type: application/json'); header('Cache-Control: no-store');
    try {
        $root=realpath($computedRoot); dc_require($root!==false && is_dir($root),'ROOT_UNAVAILABLE');
        global $DIRECT_INLINE_CONFIG;
        $configPath=null;
        if (isset($DIRECT_INLINE_CONFIG) && is_array($DIRECT_INLINE_CONFIG)) {
            $cfg=$DIRECT_INLINE_CONFIG;
        } else {
            $configPath=getenv('DIRECT_POLICY_'.strtoupper($site).'_CONFIG');
            dc_require($configPath && realpath($configPath)!==false && !dc_inside($root,realpath($configPath)),'PRIVATE_CONFIG_REQUIRED');
            $cfg=require $configPath;
        }
        dc_require(is_array($cfg) && $cfg['enabled']===true && realpath($cfg['root'])===$root,'CONFIG_ROOT_MISMATCH');
        $state=realpath($cfg['state_dir']);
        dc_require($state!==false && is_dir($state) && !is_link($cfg['state_dir']) && (fileperms($state)&0077)===0,'PRIVATE_STATE_REQUIRED');
        dc_require(isset($cfg['public_roots']) && count($cfg['public_roots'])>0,'PUBLIC_ROOT_INVENTORY_REQUIRED');
        foreach($cfg['public_roots'] as $public) {
            $pub=realpath($public); dc_require($pub!==false,'PUBLIC_ROOT_INVALID');
            dc_require(!dc_inside($pub,$state), 'PRIVATE_STATE_REQUIRED');
            if ($configPath!==null) dc_require(!dc_inside($pub,realpath($configPath)), 'PRIVATE_STATE_REQUIRED');
        }
        dc_require(!dc_inside($root,$state),'PRIVATE_STATE_REQUIRED');
        $cfg['state_dir']=$state;
        $q=isset($_SERVER['HTTP_X_DIRECT_ENVELOPE'])?$_SERVER['HTTP_X_DIRECT_ENVELOPE']:'';
        $sig=dc_decode(isset($_SERVER['HTTP_X_DIRECT_SIGNATURE'])?$_SERVER['HTTP_X_DIRECT_SIGNATURE']:'');
        $p=json_decode(dc_decode($q),true); dc_require(is_array($p),'BAD_PAYLOAD');
        $body=file_get_contents('php://input',false,null,0,4000001); dc_require(is_string($body) && strlen($body)<=4000000,'BODY_TOO_LARGE');
        $data=dc_execute($p,$body,$cfg,$root,$_SERVER['REQUEST_METHOD'],$q,$sig);
        http_response_code(200); echo json_encode($data,JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    } catch(Exception $e) {
        http_response_code(409); echo json_encode(array('ok'=>false,'error'=>$e->getMessage()));
    }
    exit;
}
