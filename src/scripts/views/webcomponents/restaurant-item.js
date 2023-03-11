import RestaurantAPI from '../../data/restaurant-api';
import stringTruncate from '../../data/string-truncate';

class RestaurantItem extends HTMLElement {
  #restaurant = null;

  set restaurant(restaurantObject) {
    this.#restaurant = restaurantObject;
    this.#render();
  }

  get itemId() {
    const { id } = this.#restaurant;

    return id;
  }

  #render() {
    const {
      name,
      pictureId,
      city,
      rating,
      description,
    } = this.#restaurant;

    this.setAttribute('ariaLabel', `Restoran: ${name}`);
    this.setAttribute('tabIndex', 0);

    this.innerHTML += `
      <div class="restaurant-item__container" aria-label="Restoran: ${name}" tab-index="0">
        <div class="restaurant-item__kv">
          <img class="restaurant-item__kv-thumbnail" alt="Restoran: ${name}" src="${RestaurantAPI.getImageSrc(pictureId, 'small')}">
          <div class="restaurant-item__kv-city-container">
            <img src="${'../../../images/icons/baseline_location_on_white_24dp.png'}" class="restaurant-item__kv-city-icon" alt="Kota">
            <span class="restaurant-item__kv-city-text">${city}</span>
          </div>
        </div>
        <div class="restaurant-item__text">
          <a class="restaurant-item__text-name" href="#/detail/${this.itemId}">${name}</a>
          <p class="restaurant-item__text-rating">Rating: ${Number(rating).toFixed(1)}</p>
          <p class="restaurant-item__text-description">${stringTruncate(description)}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
