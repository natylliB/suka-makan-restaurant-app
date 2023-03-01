class SearchBar extends HTMLElement {
  #searchHandlerFunction = null;

  #shadowRoot = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  addSearchHandler(handlerFunction = (searchString) => {
    console.log('Default handler activated, handler function is not set for the search button.');
    console.log(`Search String: ${searchString}`);
  }) {
    this.#searchHandlerFunction = handlerFunction;
    this.#render();
  }

  #render() {
    this.#shadowRoot.innerHTML = `
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        .search-bar__form {
          display: flex;
          flex-direction: column;
          width: 80%;
          margin: auto;
          align-items: center;
        }

        .search-bar__form-label {
          color: #FCECDD;
        }

        .search-bar__form-input-text {
          width: 100%;
          padding: 8px 12px;
          color: #FEA82F;
          min-height: 44px;
          border: none;
          border-bottom: 4px solid #FF6701;
          border-radius: 4px 0 0 4px;
          background-color: #FCECDD;
        }

        .search-bar__form-input-text:focus {
          outline: none;
          color: white;
          background-color: #FFC288;
        }
        
        .search-bar__form-search {
          width: 100%;
          margin-top: 8px;
          display: flex;
          flex-direction: row;
        }

        .search-bar__form-button {
          border: none;
          border-radius: 0 3px 3px 0;
          background-color: #FF6701;
          min-width: 44px;
          min-height: 44px;
          margin:auto;
        }
        
        .search-bar__form-button:focus {
          outline: none;
          background-color: #FCECDD;
        }

        .search-bar__form-button:focus > img {
          filter: brightness(0) saturate(100%) invert(41%) sepia(94%) saturate(1798%) hue-rotate(359deg) brightness(101%) contrast(105%);
        }
      </style>
    `;

    this.#shadowRoot.innerHTML += `
      <form class="search-bar__form" id="searchBarForm">
        <label class="search-bar__form-label" for="restaurantSearch">Telusuri Restoran</label>
        <div class="search-bar__form-search">
          <input class="search-bar__form-input-text" type="search" id="inputSearch" placeholder="Masukan Nama Restoran">
          <button class="search-bar__form-button" id="buttonBrowse" aria-label="search"><img src="../../../images/icons/twotone_search_white_24dp.png"></button>
        </div>
      </form>
    `;
    const buttonBrowse = this.#shadowRoot.querySelector('#buttonBrowse');

    buttonBrowse.addEventListener('click', (evt) => {
      evt.preventDefault();
      const searchString = this.#shadowRoot.querySelector('#inputSearch').value;
      this.#searchHandlerFunction(searchString);
    });
  }
}

customElements.define('search-bar', SearchBar);
