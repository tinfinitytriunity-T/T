<?php
/*
 * MTHA^DIRECT public endpoint with additive DIRECT_COMMON_1.
 * Safe placements: /Margot23/fs-bridge.php or /Margot23/_bridge/fs-bridge.php
 * Historical q/sig requests continue to mtha-direct.php unchanged.
 */
if (isset($_SERVER['HTTP_X_DIRECT_ENVELOPE']) || isset($_SERVER['HTTP_X_DIRECT_SIGNATURE'])) {
    require __DIR__.'/direct-entry.php';
    exit;
}
require __DIR__.'/mtha-direct.php';
