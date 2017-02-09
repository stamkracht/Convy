const CACHE_NAME = 'version-1';
const CACHE_URLS = [
  './',
  './dest/main.min.css',
  './dest/main.min.js',
];


// The installation handler runs when the worker is first installed.
self.addEventListener('install', (event) => {
  console.info('[service worker] Install the service worker.');

  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.info('[service worker] Caching files.');
      return cache.addAll(CACHE_URLS);
    })
  );
});


// The activation handler runs after the worker is installed.
self.addEventListener('activate', (event) => {
  console.info('[service worker] Activate the service worker.');

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      console.info('[service worker] cacheNames: ', cacheNames);

      return Promise.all(cacheNames.map(function(thisCacheName) {
        if (thisCacheName !== CACHE_NAME) {
          console.info('[service worker] Removing cached files from ', thisCacheName);
          return caches.delete(thisCacheName)
        }
      }));
    })
  );
});


// The fetch handler runs upon every request, but it only acts upon requests
// that return true when passed to 'isCacheableRequest'. It both serves
// requests from the cache and adds requests to the cache.
self.addEventListener('fetch', (event) => {
  console.info('[service worker] fetching ', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.info('[service worker] Found in cache ', event.request.url);
        return response;
      }

      const requestClone = event.request.clone();

      fetch(requestClone)
        .then(function(response) {
          if (!response) {
            console.info('[service worker] No response from fetch.');
            return response;
          }

          const responseClone = response.clone();

          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
            return response;
          });
        })
        .catch(function(error) {
          console.info('[service worker] Error fetching and caching new data ', error);
        });
    })
  );
});
