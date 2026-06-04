// Injeção automática do Google Tag Manager
// Este script lê o GTM_ID do config.js e injeta o GTM na página.
// Inclua este arquivo em todas as páginas, logo após o config.js.
(function () {
  var cfg = window.PSICO_CONFIG || {};
  var gtmId = cfg.GTM_ID;

  if (!gtmId || !/^GTM-/.test(gtmId)) return; // Sai se GTM_ID não estiver configurado

  // Injeta o snippet <script> do GTM no <head>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0];
    var j = d.createElement(s);
    var dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', gtmId);

  // Injeta o <noscript> do GTM no início do <body>
  document.addEventListener('DOMContentLoaded', function () {
    var ns = document.createElement('noscript');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=' + gtmId;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    ns.appendChild(iframe);
    document.body.insertBefore(ns, document.body.firstChild);
  });
})();
