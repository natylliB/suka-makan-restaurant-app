import './restaurant-item';

class RestaurantCollection extends HTMLElement {
  #restaurants = null;

  set restaurants(restaurantObjects) {
    this.#restaurants = restaurantObjects;
    this.#render();
  }

  #render() {
    const collectionContainer = document.createElement('div');
    collectionContainer.setAttribute('class', 'restaurant-collection__container');

    this.#restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      collectionContainer.appendChild(restaurantItem);
    });

    this.innerHTML = `
      <p class="restaurant-collection__title">Koleksi Restoran</p>
    `;
    this.append(collectionContainer);
  }
}

customElements.define('restaurant-collection', RestaurantCollection);
