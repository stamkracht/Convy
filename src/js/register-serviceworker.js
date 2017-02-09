if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceworker.js')
      .then(function(registration) {
        console.info('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(err) {
        console.error('ServiceWorker registration failed: ', err);
      });
  });
}

else { console.info('Navigator does not support the feature serviceWorker.') }
