import RestaurantAPI from '../../data/restaurant-api';

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
    } = this.#restaurant;

    this.setAttribute('ariaLabel', `Restoran: ${name}`);
    this.setAttribute('tabIndex', 0);

    this.innerHTML = `
      <div class="restaurant-item__container">
        <img class="restaurant-item__thumbnail" aria-label="Restoran: ${name}" src="${RestaurantAPI.getImageSrc(pictureId, 'small')}">
        <p class="restaurant-item__name">${name}</p>
        <div class="restaurant-item__city-container">
          <img src="${'../../../images/icons/baseline_location_on_black_24dp.png'}" class="restaurant-item__city-location-icon" alt="location">
          <span class="restaurant-item__city-text">${String(city).toUpperCase()}</span>
        </div>
        <p class="restaurant-item__rating">Rating: ${Number(rating).toFixed(1)}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
