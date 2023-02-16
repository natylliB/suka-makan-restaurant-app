class Page {
  #pageTitle = null;

  constructor(pageTitle) {
    this.#pageTitle = pageTitle;
  }

  async render() {
    return `<h2 id="appContentTitle" class="app-content__title">${this.#pageTitle}</h2> `;
  }

  async afterRender() {
    throw new SyntaxError(`You must override this "${this.afterRender.name}" method`);
  }
}

export default Page;
