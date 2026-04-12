/**
 * AXEO Services Versailles — Google Consent Mode v2
 * Conforme CNIL — Refus par défaut
 */
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('consent', 'default', {
  analytics_storage:     'denied',
  ad_storage:            'denied',
  ad_user_data:          'denied',
  ad_personalization:    'denied',
  wait_for_update:       500
});

(function() {
  var choice = localStorage.getItem('axeo_versailles_consent');
  if (choice === 'granted') _grantAll();
})();

function _grantAll() {
  gtag('consent', 'update', {
    analytics_storage:  'granted',
    ad_storage:         'granted',
    ad_user_data:       'granted',
    ad_personalization: 'granted'
  });
}
function _denyAll() {
  gtag('consent', 'update', {
    analytics_storage:  'denied',
    ad_storage:         'denied',
    ad_user_data:       'denied',
    ad_personalization: 'denied'
  });
}
function acceptCookies() {
  _grantAll();
  localStorage.setItem('axeo_versailles_consent', 'granted');
  hideBanner();
}
function refuseCookies() {
  _denyAll();
  localStorage.setItem('axeo_versailles_consent', 'denied');
  hideBanner();
}
function hideBanner() {
  var b = document.getElementById('cookie-banner');
  if (b) { b.style.transform = 'translateY(100%)'; setTimeout(function(){ b.style.display='none'; }, 350); }
}
document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('axeo_versailles_consent')) {
    var b = document.getElementById('cookie-banner');
    if (b) b.classList.add('show');
  }
});
