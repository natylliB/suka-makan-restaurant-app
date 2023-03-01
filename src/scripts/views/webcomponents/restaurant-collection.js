import './restaurant-item';

class RestaurantCollection extends HTMLElement {
  #restaurants = null;

  #collectionTitle = null;

  #itemClickHandler = null;

  #errorMessage = null;

  #shadowRoot = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  initialize(
    restaurantObjects,
    collectionTitle = 'Koleksi Restoran',
    itemClickHandler = (itemId) => { console.log(`default handler activated, item id: ${itemId}`);},
    errorMessage = { title: 'Data Tidak Ketemu!', text: 'Restoran yang anda cari tidak ditemukan.' }
  ) {
    this.#restaurants = restaurantObjects;
    this.#collectionTitle = collectionTitle;
    this.#itemClickHandler = itemClickHandler;
    this.#errorMessage = errorMessage;
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

        .restaurant-collection__title {
          color: #FF6701;
          padding: 20px 0;
          text-align: center;
        }
        
        .restaurant-collection__title::after {
          content: "";
          border-bottom: 1px solid #FF6701;
          display: block;
          margin-top: 16px;
        }
        
        .restaurant-collection__error {
          display:flex;
          flex-direction: row;
          width: 100%;
          height: 150px;
          padding: 16px;
          gap: 8px;
          justify-content: center;
          align-items: center;
        }

        .restaurant-collection__error-icon {
          width: 44px;
          height: 44px;
      
          filter: invert(59%) sepia(0%) saturate(0%) hue-rotate(230deg) brightness(90%) contrast(98%);
        }

        .restaurant-collection__error > div {
          color: gray;
          width: 60%;
        }

        .restaurant-collection__error-title {
          font-weight: bold;
          text-align: justify;
        }
        
        .restaurant-collection__container {
          display: grid;
          grid-template-columns: 1fr;
          margin: auto;
          width: 100%;
          padding: 16px;
          gap: 16px;
        }
      </style>
    `;

    this.#shadowRoot.innerHTML += `
      <h2 class="restaurant-collection__title">${this.#collectionTitle}</h2>
    `;

    if (this.#restaurants.length !== 0) {
      this.#generateCollection();
      return;
    }

    this.#shadowRoot.innerHTML += `
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

    this.#shadowRoot.append(collectionContainer);
  }
}

customElements.define('restaurant-collection', RestaurantCollection);
