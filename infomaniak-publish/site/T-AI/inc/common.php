<?php
$config = require dirname(__DIR__) . '/config.php';
$apiBase = rtrim(isset($config['api_base']) ? (string)$config['api_base'] : 'https://t-ai-field-preview.vercel.app', '/');
$stableApiBase = rtrim(isset($config['stable_api_base']) ? (string)$config['stable_api_base'] : 'https://taibridge.vercel.app', '/');
$apiHost = parse_url($apiBase, PHP_URL_HOST);
if (!$apiHost) $apiHost = 't-ai-field-preview.vercel.app';
function tai_headers($apiBase, $lab) {
  header('X-Content-Type-Options: nosniff');
  header('X-Frame-Options: DENY');
  header('Referrer-Policy: no-referrer');
  header('Permissions-Policy: camera=(), geolocation=(), payment=(), usb=()');
  if ($lab) header('Cache-Control: no-store, private, max-age=0');
  header("Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'");
}
function tai_h($v) { return htmlspecialchars((string)$v, ENT_QUOTES, 'UTF-8'); }
