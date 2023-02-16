import UrlParser from './url-parser';

class Routing {
  #routes = null;

  constructor(routes) {
    this.#routes = routes;
  }

  getCurrentPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    return this.#routes[url];
  }
}

export default Routing;
