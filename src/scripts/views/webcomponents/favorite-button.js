import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

class FavoriteButton extends HTMLElement {
  #shadowRoot = null;

  #restaurant = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  async intialize(restaurant) {
    this.#restaurant = restaurant;
    await this.#render();
  }

  async #render() {
    this.#shadowRoot.innerHTML = `
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

    await this.#renderButton();
  }

  async #renderButton() {
    const { id } = this.#restaurant;

    if (await this.#isRestaurantFavorite(id)) {
      this.#renderLikedButton();
    } else {
      this.#renderLikeButton();
    }
  }

  async #isRestaurantFavorite(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  }

  #renderLikeButton() {
    const favoriteButtonContainer = this.#shadowRoot.querySelector('.favorite-button-container');
    favoriteButtonContainer.innerHTML = `
    <button class="favorite-button" aria-label="favorite" id="btnLike">
      <img class="favorite-button__icon" src="../../../images/icons/sharp_favorite_border_black_24dp.png">
    </button>
    `;

    const btnLike = this.#shadowRoot.querySelector('#btnLike');

    btnLike.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.#restaurant);
      this.#renderButton();
    });
  }

  #renderLikedButton() {
    const favoriteButtonContainer = this.#shadowRoot.querySelector('.favorite-button-container');
    favoriteButtonContainer.innerHTML = `
    <button class="favorite-button" aria-label="favorite" id="btnLiked">
      <img class="favorite-button__icon" src="../../../images/icons/sharp_favorite_black_24dp.png">
    </button>
    `;

    const btnLiked = this.#shadowRoot.querySelector('#btnLiked');
    btnLiked.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.#restaurant.id);
      this.#renderButton();
    });
  }
}

customElements.define('favorite-button', FavoriteButton);
