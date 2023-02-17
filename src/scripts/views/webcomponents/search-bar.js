class SearchBar extends HTMLElement {
  #searchHandlerFunction = null;

  connectedCallback() {
    this.addSearchHandler();
  }

  addSearchHandler(handlerFunction = (searchString) => {
    console.log('Default handler activated, handler function is not set for the search button.');
    console.log(`Search String: ${searchString}`);
  }) {
    this.#searchHandlerFunction = handlerFunction;
    this.#render();
  }

  #render() {
    this.classList.add('search-bar');
    this.innerHTML = `
      <form class="search-bar__form" id="searchBarForm">
        <label class="search-bar__form-label" for="restaurantSearch">Telusuri Restoran</label>
        <div class="search-bar__form-search">
          <input class="search-bar__form-input-text" type="search" id="inputSearch" placeholder="Masukan Nama Restoran">
          <button class="search-bar__form-button" id="buttonBrowse"><img src="../../../images/icons/twotone_search_white_24dp.png"></button>
        </div>
      </form>
    `;
    const buttonBrowse = document.querySelector('#buttonBrowse');

    buttonBrowse.addEventListener('click', () => {
      const searchString = document.querySelector('#inputSearch').value;
      this.#searchHandlerFunction(searchString);
    });
  }
}

customElements.define('search-bar', SearchBar);
