(() => {
  'use strict';

  const STEALTH = 'MODE FURTIF ;-)';

  function stealthifyVisibleState() {
    document.querySelectorAll('.flight-card .badge, .flight-card .takeoff .v, #observerStrip .stat .v, #flightsHero').forEach((el) => {
      const value = el.textContent || '';
      if (value.includes('UNRESOLVED_OBSERVER') || value.trim() === 'INDISPONIBLE') {
        el.textContent = value.replaceAll('UNRESOLVED_OBSERVER', STEALTH).replaceAll('INDISPONIBLE', STEALTH);
      }
    });

    document.querySelectorAll('.flight-empty strong').forEach((el) => {
      if ((el.textContent || '').includes('État courant non résolu')) {
        el.textContent = 'Mode furtif ;-)';
      }
    });
  }

  function startStealthOverlay() {
    stealthifyVisibleState();
    const observer = new MutationObserver(stealthifyVisibleState);
    observer.observe(document.body, { subtree: true, childList: true, characterData: true });
  }

  function loadScript(src, onload, onerror) {
    const script = document.createElement('script');
    script.src = src;
    if (onload) script.onload = onload;
    if (onerror) script.onerror = onerror;
    document.head.appendChild(script);
  }

  function loadIndicators() {
    loadScript('./t-indicators.js?v=0.3.0', null, () => console.error('T^ indicators unavailable'));
  }

  function loadCore() {
    loadScript(
      './app-core.js?v=0.2.1',
      () => {
        startStealthOverlay();
        loadIndicators();
      },
      () => console.error('T^Crypto-v3 core script unavailable')
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCore, { once: true });
  } else {
    loadCore();
  }
})();
