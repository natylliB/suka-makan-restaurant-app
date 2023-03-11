class FavoriteButton extends HTMLElement {
  #shadowRoot = null;

  #restaurantId = null;

  #favoriteRestaurant = null;

  #favoriteCallback = null;

  #unfavoriteCallback = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  async initialize({
    restaurantId,
    favoriteRestaurant,
    favoriteCallback,
    unfavoriteCallback,
  }) {
    this.#restaurantId = restaurantId;
    this.#favoriteRestaurant = favoriteRestaurant;
    this.#favoriteCallback = favoriteCallback;
    this.#unfavoriteCallback = unfavoriteCallback;
    await this.#render();
  }

  async #render() {
    this.#shadowRoot.innerHTML = this.#getStyleAndBaseTemplate();
    await this.#renderButton();
  }

  async #renderButton() {
    if (await this.#isRestaurantFavorite(this.#restaurantId)) {
      this.#renderUnfavoriteButton();
    } else {
      this.#renderFavoriteButton();
    }
  }

  async #isRestaurantFavorite(id) {
    const restaurant = await this.#favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  }

  #renderFavoriteButton() {
    const favoriteButtonContainer = this.#shadowRoot.querySelector('.favorite-button-container');
    favoriteButtonContainer.innerHTML = this.#getFavoriteButtonTemplate();

    const btnLike = this.#shadowRoot.querySelector('#btnLike');

    btnLike.addEventListener('click', async () => {
      await this.#favoriteCallback();
      this.#renderButton();
    });
  }

  #renderUnfavoriteButton() {
    const favoriteButtonContainer = this.#shadowRoot.querySelector('.favorite-button-container');
    favoriteButtonContainer.innerHTML = this.#getUnfavoriteButtonTemplate();

    const btnLiked = this.#shadowRoot.querySelector('#btnLiked');
    btnLiked.addEventListener('click', async () => {
      await this.#unfavoriteCallback();
      this.#renderButton();
    });
  }

  #getStyleAndBaseTemplate() {
    return `
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .favorite-button {
          background-color: #FF6701;
          min-width: 44px;
          min-height: 44px;
          padding: 10px;
  
          display: flex;
          justify-content: center;
          align-item: center;
          
          border-radius: 50%;
          border: none;
          cursor: pointer;
        }
        .favorite-button__icon {
          width: 24px;
          height: 24px;
          filter: invert(99%) sepia(100%) saturate(0%) hue-rotate(212deg) brightness(109%) contrast(101%)
        }
      </style>
      <div class="favorite-button-container"></div>
    `;
  }

  #getUnfavoriteButtonTemplate() {
    return `
      <button class="favorite-button" aria-label="unfavorite" id="btnLiked">
        <img class="favorite-button__icon" src="../../../images/icons/sharp_favorite_black_24dp.png">
        </button>
    `;
  }

  #getFavoriteButtonTemplate() {
    return `
      <button class="favorite-button" aria-label="favorite" id="btnLike">
        <img class="favorite-button__icon" src="../../../images/icons/sharp_favorite_border_black_24dp.png">
      </button>
    `;
  }
}

customElements.define('favorite-button', FavoriteButton);
