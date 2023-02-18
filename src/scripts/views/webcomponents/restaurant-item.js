import RestaurantAPI from '../../data/restaurant-api';

class RestaurantItem extends HTMLElement {
  #restaurant = null;

  set restaurant(restaurantObject) {
    this.#restaurant = restaurantObject;
    this.#render();
  }

  #render() {
    const {
      name,
      pictureId,
      city,
      rating,
    } = this.#restaurant;

    this.innerHTML = `
      <div class="restaurant-item__container">
        <img class="restaurant-item__thumbnail" aria-label="Restoran: ${name}" src="${RestaurantAPI.getImageSrc(pictureId, 'small')}">
        <p class="restaurant-item__name">${name}</p>
        <p class="restaurant-item__city">${city}</p>
        <p class="restaurant-item__rating">${rating}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
