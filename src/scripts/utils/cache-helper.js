import CONFIG from '../globals/config';

class CacheHelper {
  static async cachingAppShell(requests) {
    const cache = await this.#openCache();
    cache.addAll(requests);
  }

  static async deleteOldCache() {
    const cacheNames = await caches.keys();

    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName => caches.delete(filteredName)));
  }

  static async revalidateCache(request) {
    try {
      return await this.#fetchRequest(request);
    }
    catch {
      return await caches.match(request);
    }
  }

  static async #fetchRequest(request) {
    const response = await fetch(request);

    if(!response || response.status !== 200){
      return response;
    }

    await this.#addCache(request);
    return response;
  }

  static async #addCache(request) {
    const cache = await this.#openCache();
    cache.add(request);
  }

  static async #openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  }
}

export default CacheHelper;
