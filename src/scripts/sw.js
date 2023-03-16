import { precacheAndRoute } from 'workbox-precaching';
import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

// eslint-disable-next-line no-underscore-dangle
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('service worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('service worker activated');
  evt.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (evt) => {
  if (evt.request.method !== 'GET') return;
  evt.respondWith(CacheHelper.revalidateCache(evt.request));
});
