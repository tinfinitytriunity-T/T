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

  function loadCore() {
    const script = document.createElement('script');
    script.src = './app-core.js?v=0.3.1';
    script.onload = startStealthOverlay;
    script.onerror = () => console.error('T^Crypto-v3 core script unavailable');
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCore, { once: true });
  } else {
    loadCore();
  }
})();
