class FavoriteButton extends HTMLElement {
  #restaurantId = null;

  #favoriteRestaurant = null;

  #favoriteCallback = null;

  #unfavoriteCallback = null;

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
    this.innerHTML = '<div class="favorite-button-container"></div>';
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
    const favoriteButtonContainer = this.querySelector('.favorite-button-container');
    favoriteButtonContainer.innerHTML = this.#getFavoriteButtonTemplate();

    const btnLike = this.querySelector('#btnFavorite');

    btnLike.addEventListener('click', async () => {
      await this.#favoriteCallback();
      this.#renderButton();
    });
  }

  #renderUnfavoriteButton() {
    const favoriteButtonContainer = this.querySelector('.favorite-button-container');
    favoriteButtonContainer.innerHTML = this.#getUnfavoriteButtonTemplate();

    const btnLiked = this.querySelector('#btnUnfavorite');
    btnLiked.addEventListener('click', async () => {
      await this.#unfavoriteCallback();
      this.#renderButton();
    });
  }

  #getUnfavoriteButtonTemplate() {
    return `
      <button class="favorite-button" aria-label="unfavorite" id="btnUnfavorite">
        <img class="favorite-button__icon" src="../../../images/icons/sharp_favorite_black_24dp.png">
        </button>
    `;
  }

  #getFavoriteButtonTemplate() {
    return `
      <button class="favorite-button" aria-label="favorite" id="btnFavorite">
        <img class="favorite-button__icon" src="../../../images/icons/sharp_favorite_border_black_24dp.png">
      </button>
    `;
  }
}

customElements.define('favorite-button', FavoriteButton);
