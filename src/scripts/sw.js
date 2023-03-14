import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

const assetsToPrecache = [
  './',
  './images/hero/hero-image-default.jpg',
  './images/hero/hero-image-small.jpg',
  './images/icons/baseline_location_on_white_24dp.png',
  './images/icons/outline_error_outline_black_48dp.png',
  './images/icons/twotone_search_white_24dp.png',
  './images/icons/sharp_favorite_black_24dp.png',
  './images/icons/sharp_favorite_border_black_24dp.png',
  './images/logo/Suka-Makan-Logo-48px.png',
  './images/logo/Suka-Makan-Logo-96px.png',
  './images/logo/Suka-Makan-Logo-144px.png',
  './images/logo/Suka-Makan-Logo-192px.png',
  './images/logo/Suka-Makan-Logo-384px.png',
  './images/logo/Suka-Makan-Logo-512px.png',
  './images/logo/Suka-Makan-Logo.png',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(CacheHelper.cachingAppShell([...assetsToPrecache]));
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (evt) => {
  if (evt.request.method !== 'GET') return;
  evt.respondWith(CacheHelper.revalidateCache(evt.request));
});
