const CACHE_NAME = 'barakat-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'https://cdn.fontcdn.ir/Fonts/Vazir/font-face.css',
    'https://cdn.fontcdn.ir/Fonts/IranSans/font-face.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});