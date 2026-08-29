<?php
declare(strict_types=1);
$config = require dirname(__DIR__) . '/config.php';
$apiBase = rtrim((string)$config['api_base'], '/');
$apiHost = parse_url($apiBase, PHP_URL_HOST) ?: 'taibridge.vercel.app';
function tai_headers(string $apiBase, bool $lab=false): void {
  header('X-Content-Type-Options: nosniff');
  header('X-Frame-Options: DENY');
  header('Referrer-Policy: no-referrer');
  header('Permissions-Policy: camera=(), geolocation=(), payment=(), usb=()');
  if ($lab) header('Cache-Control: no-store, private, max-age=0');
  $connect = "'self'";
  header("Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src {$connect}; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'");
}
function tai_h(string $v): string { return htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
