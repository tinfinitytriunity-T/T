<?php
/* DIRECT_COMMON_1 additive entry for mtha.ch /Margot23/. PHP 5.6-compatible syntax. */
function mtha_common_direct_fail($status, $code) {
    if (function_exists('http_response_code')) http_response_code($status);
    else header('HTTP/1.1 '.$status.' Error');
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode(array('ok'=>false,'error'=>$code), JSON_UNESCAPED_SLASHES);
    exit;
}
$mthaDirectDir = realpath(__DIR__);
if ($mthaDirectDir === false || !is_dir($mthaDirectDir)) mtha_common_direct_fail(503, 'DIRECT_BRIDGE_DIR_UNAVAILABLE');
$mthaDirectName = basename(str_replace('\\', '/', $mthaDirectDir));
$mthaDirectRoot = false;
if ($mthaDirectName === 'Margot23') {
    $mthaDirectRoot = $mthaDirectDir;
} elseif ($mthaDirectName === '_bridge') {
    $candidate = realpath(dirname($mthaDirectDir));
    if ($candidate !== false && is_dir($candidate) && basename(str_replace('\\', '/', $candidate)) === 'Margot23') $mthaDirectRoot = $candidate;
}
if ($mthaDirectRoot === false) mtha_common_direct_fail(503, 'DIRECT_MTHA_LOCATION_INVALID');
$mthaDirectRoot = rtrim($mthaDirectRoot, DIRECTORY_SEPARATOR);
$mthaDirectState = dirname($mthaDirectRoot).DIRECTORY_SEPARATOR.'.mtha-direct-state';
if (!is_dir($mthaDirectState) && !@mkdir($mthaDirectState, 0700, true) && !is_dir($mthaDirectState)) mtha_common_direct_fail(503, 'DIRECT_STATE_UNAVAILABLE');
@chmod($mthaDirectState, 0700);
clearstatcache(true, $mthaDirectState);
$mthaDirectStateReal = realpath($mthaDirectState);
$mthaDirectMode = @fileperms($mthaDirectState);
if ($mthaDirectStateReal === false || !is_dir($mthaDirectStateReal) || is_link($mthaDirectState) || !is_int($mthaDirectMode) || (($mthaDirectMode & 0077) !== 0)) mtha_common_direct_fail(503, 'DIRECT_STATE_NOT_PRIVATE');
$DIRECT_INLINE_CONFIG = array(
  'enabled'=>true,
  'audience'=>'MTHA_DIRECT',
  'scope'=>'/Margot23/',
  'canon'=>'TBRIDGE1',
  'root'=>$mthaDirectRoot,
  'state_dir'=>$mthaDirectStateReal,
  'public_roots'=>array($mthaDirectRoot),
  'keys'=>array(
    'DIRECT_COMMON_1'=>array(
      'enabled'=>true,
      'public_key'=><<<'PEM'
-----BEGIN PUBLIC KEY-----
MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAuxSybCz8q0qGg5PQOes+
HXrS8ObnUCmeN7GjgugtWgdsNz7eVdiUd2EV8pdGB//wvXWmoSckL+0u+SgTpOZv
3s0xgj/g28uIRykydu3AtwacKqfPtHR7mSymlCxwerJMXfLUzoLiXxyRhYEHLNZt
+K/9O1ucDCotHfXXTygQcl0AXdHTyVKoEjoJD46acz7oj49VJb2ZydKGamRcJRZo
3CP4a7aERuv2V+0kiuzSvHeWt+wPFUZAoYOWv5HYheYBcf04D9NhGEROkox6J3vY
lEl1jV6mC1REgurZO682ijpsvUbhijNBAsD358k79wr5ZeetK7arIUvxwW9LM7YQ
JW6ThQkuUDHBRSkPrsceAc6Sxwch4zgS93I/Zmj9WawkOJ0Za37YGtP6qkmRZJt4
0NYulrPxnOpI+IB6Lpy7E+44TBaJnlVbXdorE2ArM/G3zM7KgI0X8ZdNHvt6DiAs
619DYGmOZmtHyFszy8GOEa/2h/DVCesfSjzJqqsxpo4fAgMBAAE=
-----END PUBLIC KEY-----
PEM
,
      'ops'=>array('ping','status','list','stat','read','mkdir','write'),
      'paths'=>array(''),
      'create_modes'=>array(array('path'=>'','file'=>0644,'dir'=>0755)),
      'php_paths'=>array(),
      'deny'=>array('_private','private','secrets','_secrets','vault','_vault','keys','_keys')
    )
  )
);
require_once __DIR__.'/direct-policy-core.php';
require_once __DIR__.'/direct-policy-exec.php';
require_once __DIR__.'/direct-policy-dispatch.php';
dc_dispatch('mtha', $mthaDirectRoot);
