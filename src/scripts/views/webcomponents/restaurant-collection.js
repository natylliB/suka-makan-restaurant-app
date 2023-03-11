import './restaurant-item';

class RestaurantCollection extends HTMLElement {
  #restaurants = null;

  #collectionTitle = null;

  #itemClickHandler = null;

  #errorMessage = null;

  initialize(
    restaurantObjects,
    collectionTitle = 'Koleksi Restoran',
    itemClickHandler = (itemId) => { console.log(`default handler activated, item id: ${itemId}`); },
    errorMessage = { title: 'Data Tidak Ketemu!', text: 'Restoran yang anda cari tidak ditemukan.' },
  ) {
    this.#restaurants = restaurantObjects;
    this.#collectionTitle = collectionTitle;
    this.#itemClickHandler = itemClickHandler;
    this.#errorMessage = errorMessage;
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <h2 class="restaurant-collection__title">${this.#collectionTitle}</h2>
    `;

    if (this.#restaurants.length !== 0) {
      this.#generateCollection();
      return;
    }

    this.innerHTML += `
      <div class="restaurant-collection__error">
        <img src="../../../images/icons/outline_error_outline_black_48dp.png" alt="error" class="restaurant-collection__error-icon">
        <div>
          <p class="restaurant-collection__error-title">${this.#errorMessage.title}</p>
          <p class="restaurant-collection__error-text">${this.#errorMessage.text}</p>
        </div>
      </div>
    `;
  }

  #generateCollection() {
    const collectionContainer = document.createElement('div');
    collectionContainer.setAttribute('class', 'restaurant-collection__container');

    this.#restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');

      restaurantItem.restaurant = restaurant;

      restaurantItem.addEventListener('click', (evt) => {
        this.#itemClickHandler(evt.currentTarget.itemId);
      });

      restaurantItem.addEventListener('keydown', (evt) => {
        if (evt.code === 'Enter') {
          this.#itemClickHandler(evt.currentTarget.itemId);
        }
      });

      collectionContainer.appendChild(restaurantItem);
    });

    this.append(collectionContainer);
  }
}

customElements.define('restaurant-collection', RestaurantCollection);
