import RestaurantAPI from '../../data/restaurant-api';
import stringTruncate from '../../data/string-truncate';

class RestaurantItem extends HTMLElement {
  #restaurant = null;

  #shadowRoot = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

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

    this.#shadowRoot.innerHTML = `
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        .restaurant-item__container {
          width: 100%;
          padding: 16px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 5px 10px 0 rgba( 0, 0, 0, .4 );
          border-radius: 5px;
        }
        
        .restaurant-item__text {
          padding: 8px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .restaurant-item__text-name {
          color: #FF6701;
          font-size: 1.2em;
          font-weight: bold;
        }

        .restaurant-item__text-description {
          line-height: 1.5em;
        }
        
        .restaurant-item__kv{
          width: 100%;
          height: 200px;
          position: relative;
        }

        .restaurant-item__kv-thumbnail {
          width:100%;
          height: 100%;
          border-radius: 5px;
          object-fit: cover;
        }
        
        .restaurant-item__kv-city-container {
          position: absolute;
          top: 0;
          background-image: linear-gradient(to right, #FF6701, #FF6701cc , transparent);
          @include variables.flexdisplay(row);
          gap: 4px;
          padding: 8px;
          padding-right: 36px;
          border-top-left-radius: 5px;
          align-items: center;
        }

        .restaurant-item__kv-city-icon {
          width: 18px;
          height: 18px;
        }

        .restaurant-item__kv-city-text {
          color: white;
        }
      </style>
    `;

    const restaurantItem = this.#shadowRoot.host;

    restaurantItem.setAttribute('ariaLabel', `Restoran: ${name}`);
    restaurantItem.setAttribute('tabIndex', 0);

    this.#shadowRoot.innerHTML += `
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
