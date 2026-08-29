<?php
declare(strict_types=1);
function tai_head(string $title, string $apiBase, string $version, string $page): void { $prefix=$page==='lab'?'../':''; ?>
<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="color-scheme" content="dark"><meta name="theme-color" content="#06110f"><title><?=tai_h($title)?></title><link rel="stylesheet" href="<?=$prefix?>assets/tai.css"><link rel="stylesheet" href="<?=$prefix?>assets/live.css"></head>
<body data-api-base="" data-page="<?=tai_h($page)?>" data-version="<?=tai_h($version)?>"><canvas id="fieldCanvas" aria-hidden="true"></canvas><div class="vignette" aria-hidden="true"></div><main class="shell">
<?php }
function tai_foot(string $page): void { $prefix=$page==='lab'?'../':''; ?>
</main><script src="<?=$prefix?>assets/field-bg.js" defer></script><script src="<?=$prefix?>assets/core.js" defer></script><script src="<?=$prefix?>assets/<?= $page==='lab'?'lab.js':'public.js' ?>" defer></script></body></html>
<?php }
