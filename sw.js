const CACHE_NAME = 'ok-operasi-v1';

// File yang di-cache untuk offline
const STATIC_ASSETS = [
  './index.html',
  './manifest.json'
];

// CDN assets yang di-cache saat pertama diakses
const CDN_CACHE = 'ok-operasi-cdn-v1';

// ═══ INSTALL — cache file lokal ═══
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ═══ ACTIVATE — hapus cache lama ═══
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k !== CDN_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ═══ FETCH — strategi cache ═══
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // File lokal → Cache First (app utama selalu dari cache = offline ready)
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => caches.match('./index.html'));
      })
    );
    return;
  }

  // CDN (fonts, xlsx, qrcode) → Cache First, fallback network
  if (
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.hostname.includes('cdnjs.cloudflare.com')
  ) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CDN_CACHE).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => cached);
      })
    );
    return;
  }

  // Request lain → network saja
  event.respondWith(fetch(event.request).catch(() => new Response('Offline', { status: 503 })));
});
