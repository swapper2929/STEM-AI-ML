// Simple service worker registration for static hosting.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('stem-ai-lab-v1').then((cache) => cache.addAll(['/index.html', '/manifest.webmanifest']))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
