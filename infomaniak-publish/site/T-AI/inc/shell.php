<?php
declare(strict_types=1);
function tai_head(string $title, string $apiBase, string $version, string $page): void { ?>
<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="color-scheme" content="dark"><meta name="theme-color" content="#06110f"><title><?=tai_h($title)?></title><link rel="stylesheet" href="<?= $page==='lab' ? '../assets/tai.css' : 'assets/tai.css' ?>"></head>
<body data-api-base="<?=tai_h($apiBase)?>" data-page="<?=tai_h($page)?>" data-version="<?=tai_h($version)?>"><canvas id="fieldCanvas" aria-hidden="true"></canvas><div class="vignette" aria-hidden="true"></div><main class="shell">
<?php }
function tai_foot(string $page): void { ?>
</main><script src="<?= $page==='lab' ? '../assets/field-bg.js' : 'assets/field-bg.js' ?>" defer></script><script src="<?= $page==='lab' ? '../assets/core.js' : 'assets/core.js' ?>" defer></script><script src="<?= $page==='lab' ? '../assets/lab.js' : 'assets/public.js' ?>" defer></script></body></html>
<?php }
