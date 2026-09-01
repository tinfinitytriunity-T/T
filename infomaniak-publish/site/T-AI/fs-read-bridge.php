<?php
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-Robots-Tag: noindex, nofollow, noarchive');
header('X-Content-Type-Options: nosniff');
$PUBKEY=<<<'PEM'
-----BEGIN PUBLIC KEY-----
MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAxiBjiKVJvQpB2StZynUg
rXyisE7PBOnrTtGCmvaQEhS4VSQgto+8GY7nb8ue55/LPOhtNYppfsgW5A/VgW4m
B6ej5graBbE/OmmZ2D78ZkWrF8ZW7lO7rNgWYGKEbbIPtA+JwtH4n7rOkUdDlgRa
UimDlmOOnJBzLn1kcUGlVNyGkWx0Ya9cfRBxmYCux5FQ4J9hvAEVtrYFf4Xel1Zt
U1lGjrVGhGf0ykJDv7dkhRCtWORT3HFDQ+TDE8ZGuqnChvCgezVEkSSCgJyy3pzS
InnK3FFUaLSfzEjcaQx7nsz4Lo4riJv2e4jgmf+2IeLCsN5ugjuLQGs5FLRTSztp
6yMT1h5Y9UkOU8oFUN3xPgx2SGC7P0FK3N3JS0s3aS9o0XN6A6Mvb3h6SLYBxgwq
Xtt6ljYwaJwpa+Bye3axoGVvVBdAQ8P6LEMKA/cMRN2epGB6tsclxPYjqj8uhdRk
lYUhmd7H43jqVgnKu04ho1yvi6rUrcyk59pW8RM4quolAgMBAAE=
-----END PUBLIC KEY-----
PEM;
$MAX_WRITE=4000000;
function j($c,$o){http_response_code($c);header('Content-Type: application/json; charset=utf-8');echo json_encode($o,JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);exit;}
function d64($s){if(!is_string($s)||$s===''||!preg_match('/^[A-Za-z0-9_-]+$/',$s))return false;$p=strlen($s)%4;if($p)$s.=str_repeat('=',4-$p);return base64_decode(strtr($s,'-_','+/'),true);}
function nr($p){if(!is_string($p)||strpos($p,"\0")!==false||strpos($p,'\\')!==false)return false;$p=trim($p,'/');if($p==='')return '';foreach(explode('/',$p) as $s)if($s===''||$s==='.'||$s==='..')return false;return $p;}
function sj($r,$p){$p=nr($p);if($p===false)return false;$x=$r;if($p==='')return $x;foreach(explode('/',$p) as $s){$x.=DIRECTORY_SEPARATOR.$s;if(is_link($x))return false;}return $x;}
function mimeof($p){if(function_exists('finfo_open')){$f=@finfo_open(FILEINFO_MIME_TYPE);if($f){$m=@finfo_file($f,$p);@finfo_close($f);if($m)return $m;}}return 'application/octet-stream';}
function meta($p,$r){$o=array('path'=>$r,'type'=>is_dir($p)?'dir':(is_file($p)?'file':'other'),'mtime'=>@filemtime($p)?:0);if(is_file($p))$o['size']=@filesize($p)?:0;return $o;}
function walk($p,$r,$rec,$depth,$limit,&$o,$lev){$a=@scandir($p);if($a===false)return;foreach($a as $n){if($n==='.'||$n==='..')continue;$x=$p.DIRECTORY_SEPARATOR.$n;if(is_link($x))continue;$rr=$r===''?$n:$r.'/'.$n;$o[]=meta($x,$rr);if(count($o)>=$limit)return;if($rec&&is_dir($x)&&$lev<$depth)walk($x,$rr,true,$depth,$limit,$o,$lev+1);}}
function hidden_seg($p){foreach(explode('/',$p) as $s)if($s!==''&&substr($s,0,1)==='.')return true;return false;}
function writable_name($p){if(hidden_seg($p))return false;$b=strtolower(basename($p));if($b===''||$b==='.'||$b==='..')return false;$ext=strtolower(pathinfo($b,PATHINFO_EXTENSION));$ok=array('txt','md','json','jsonl','csv','tsv','xml','yaml','yml','html','htm','css','js','mjs','cjs','map','svg','png','jpg','jpeg','webp','gif','ico','pdf','zip','gz','tgz','tar','doc','docx','xls','xlsx','xlsm','ppt','pptx','odt','ods','odp','rtf','parquet','feather','arrow','sqlite','db','bin','dat');return in_array($ext,$ok,true);}
function claim_nonce($n){$d=__DIR__.DIRECTORY_SEPARATOR.'.tbridge-nonce';if(!is_dir($d)&&!@mkdir($d,0700,true))return false;$now=time();$ls=@scandir($d);if(is_array($ls))foreach($ls as $f){if($f==='.'||$f==='..')continue;$x=$d.DIRECTORY_SEPARATOR.$f;if(is_file($x)&&$now-(@filemtime($x)?:$now)>600)@unlink($x);} $x=$d.DIRECTORY_SEPARATOR.hash('sha256',$n);$h=@fopen($x,'x');if($h===false)return false;fwrite($h,(string)$now);fclose($h);@chmod($x,0600);return true;}
$webRoot=dirname(dirname(__DIR__));$root=realpath($webRoot.DIRECTORY_SEPARATOR.'T-LAB');if($root===false)j(503,array('ok'=>false,'error'=>'root_unavailable'));
$method=strtoupper(isset($_SERVER['REQUEST_METHOD'])?$_SERVER['REQUEST_METHOD']:'GET');$cl=isset($_SERVER['CONTENT_LENGTH'])?(int)$_SERVER['CONTENT_LENGTH']:0;if($cl>$MAX_WRITE)j(413,array('ok'=>false,'error'=>'body_too_large'));
$body=file_get_contents('php://input');if($body===false)$body='';if(strlen($body)>$MAX_WRITE)j(413,array('ok'=>false,'error'=>'body_too_large'));
$q=isset($_GET['q'])?$_GET['q']:'';$sig=d64(isset($_GET['sig'])?$_GET['sig']:'');$raw=d64($q);if($sig===false||$raw===false)j(401,array('ok'=>false,'error'=>'auth_required'));
$a=json_decode($raw,true);if(!is_array($a))j(401,array('ok'=>false,'error'=>'bad_payload'));
$canon="TBRIDGE1\n".$q."\n".hash('sha256',$body);$pk=@openssl_pkey_get_public($PUBKEY);if($pk===false||openssl_verify($canon,$sig,$pk,OPENSSL_ALGO_SHA256)!==1)j(401,array('ok'=>false,'error'=>'bad_signature'));
if(!isset($a['v'])||(int)$a['v']!==2||!isset($a['ts'])||abs(time()-(int)$a['ts'])>180)j(401,array('ok'=>false,'error'=>'expired_or_version'));
if(!isset($a['method'])||strtoupper($a['method'])!==$method)j(400,array('ok'=>false,'error'=>'method'));
$n=isset($a['nonce'])?$a['nonce']:'';if(!is_string($n)||!preg_match('/^[A-Za-z0-9_-]{16,96}$/',$n))j(400,array('ok'=>false,'error'=>'nonce'));
$op=isset($a['op'])?$a['op']:'';$rel=nr(isset($a['path'])?$a['path']:'');if($rel===false)j(400,array('ok'=>false,'error'=>'path'));$p=sj($root,$rel);if($p===false)j(403,array('ok'=>false,'error'=>'unsafe_path'));
if($op==='ping'){if($method!=='GET')j(405,array('ok'=>false,'error'=>'method'));j(200,array('ok'=>true,'bridge'=>'T-LAB_FS_BRIDGE','version'=>2,'scope'=>'/web/T-LAB/','ops'=>array('list','stat','read','download','mkdir','write'),'max_write_bytes'=>$MAX_WRITE,'destructive_ops'=>false));}
if($op==='list'){if($method!=='GET')j(405,array('ok'=>false,'error'=>'method'));if(!is_dir($p)||!is_readable($p))j(404,array('ok'=>false,'error'=>'not_directory'));$e=array();$rec=!empty($a['recursive']);$depth=isset($a['depth'])?max(0,min(8,(int)$a['depth'])):2;$limit=isset($a['limit'])?max(1,min(5000,(int)$a['limit'])):1000;walk($p,$rel,$rec,$depth,$limit,$e,0);j(200,array('ok'=>true,'path'=>$rel,'count'=>count($e),'entries'=>$e));}
if($op==='stat'){if($method!=='GET')j(405,array('ok'=>false,'error'=>'method'));if(!file_exists($p)||is_link($p))j(404,array('ok'=>false,'error'=>'not_found'));$m=meta($p,$rel);if(is_file($p)){$m['sha256']=@hash_file('sha256',$p);$m['mime']=mimeof($p);}j(200,array('ok'=>true,'item'=>$m));}
if($op==='read'){if($method!=='GET')j(405,array('ok'=>false,'error'=>'method'));if(!is_file($p)||is_link($p)||!is_readable($p))j(404,array('ok'=>false,'error'=>'not_file'));$size=@filesize($p)?:0;$off=isset($a['offset'])?max(0,(int)$a['offset']):0;$max=isset($a['max_bytes'])?max(1,min(8388608,(int)$a['max_bytes'])):1048576;if($off>$size)$off=$size;$f=@fopen($p,'rb');if(!$f)j(500,array('ok'=>false,'error'=>'open_failed'));if($off)fseek($f,$off);$b=fread($f,$max);fclose($f);if($b===false)$b='';$l=strlen($b);j(200,array('ok'=>true,'path'=>$rel,'mime'=>mimeof($p),'size'=>$size,'sha256'=>@hash_file('sha256',$p),'offset'=>$off,'length'=>$l,'eof'=>($off+$l>=$size),'content_b64'=>base64_encode($b)));}
if($op==='download'){if($method!=='GET')j(405,array('ok'=>false,'error'=>'method'));if(!is_file($p)||is_link($p)||!is_readable($p))j(404,array('ok'=>false,'error'=>'not_file'));header('Content-Type: '.mimeof($p));header('Content-Length: '.filesize($p));header('Content-Disposition: inline; filename="'.str_replace(array('"','\r','\n'),' ',basename($p)).'"');readfile($p);exit;}
if($op==='mkdir'){if($method!=='POST')j(405,array('ok'=>false,'error'=>'method'));if($rel===''||hidden_seg($rel))j(403,array('ok'=>false,'error'=>'unsafe_name'));if($body!=='')j(400,array('ok'=>false,'error'=>'body_not_empty'));if(!claim_nonce($n))j(409,array('ok'=>false,'error'=>'replay_or_nonce_store'));if(file_exists($p)){if(is_dir($p))j(200,array('ok'=>true,'path'=>$rel,'created'=>false));j(409,array('ok'=>false,'error'=>'path_exists'));}$par=dirname($p);if(!is_dir($par)||is_link($par)||!is_writable($par))j(403,array('ok'=>false,'error'=>'parent_not_writable'));if(!@mkdir($p,0750,false))j(500,array('ok'=>false,'error'=>'mkdir_failed'));j(201,array('ok'=>true,'path'=>$rel,'created'=>true));}
if($op==='write'){if($method!=='POST')j(405,array('ok'=>false,'error'=>'method'));if($rel===''||!writable_name($rel))j(403,array('ok'=>false,'error'=>'unsafe_file_type'));if(!isset($a['size'])||(int)$a['size']!==strlen($body))j(400,array('ok'=>false,'error'=>'size_mismatch'));$bh=hash('sha256',$body);if(!isset($a['sha256'])||!is_string($a['sha256'])||!hash_equals(strtolower($a['sha256']),$bh))j(400,array('ok'=>false,'error'=>'hash_mismatch'));if(!claim_nonce($n))j(409,array('ok'=>false,'error'=>'replay_or_nonce_store'));if(is_dir($p)||is_link($p))j(409,array('ok'=>false,'error'=>'target_not_file'));$par=dirname($p);if(!is_dir($par)||is_link($par)||!is_writable($par))j(403,array('ok'=>false,'error'=>'parent_not_writable'));$tmp=$p.'.tbridge-'.substr(hash('sha256',$n),0,16).'.tmp';$w=@file_put_contents($tmp,$body,LOCK_EX);if($w!==strlen($body)){@unlink($tmp);j(500,array('ok'=>false,'error'=>'write_failed'));}@chmod($tmp,0640);if(!@rename($tmp,$p)){@unlink($tmp);j(500,array('ok'=>false,'error'=>'commit_failed'));}$fh=@hash_file('sha256',$p);if($fh!==$bh)j(500,array('ok'=>false,'error'=>'verify_failed'));j(200,array('ok'=>true,'path'=>$rel,'size'=>strlen($body),'sha256'=>$fh,'atomic'=>true));}
j(400,array('ok'=>false,'error'=>'unknown_op'));
