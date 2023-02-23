class RestaurantMenu extends HTMLElement {
  #shadowRoot = null;

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  render(menus) {
    this.#shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        .restaurant-menu {
          margin: 16px;
        }
        .consumables-title {
          color: #FF6701;
          font-weight: bold;
        }
        .consumables-container {
          gap: 8px;
          display: flex;
          padding: 8px 0;
          flex-flow: row wrap;

          border-top: 1px solid #FF6701;
        }

        .consumable-item {
          padding: 16px;

          box-shadow: 0 2px 4px 0 rgba( 0, 0, 0, .4 );
          border-radius: 4px;
        }
      </style>
    `;

    const foodsMenu = this.#createMenuCollection(menus.foods, 'Makanan:');
    const drinksMenu = this.#createMenuCollection(menus.drinks, 'Minuman:');

    this.#shadowRoot.append(foodsMenu, drinksMenu);
  }

  #createMenuCollection(consumables, collectionTitle) {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'restaurant-menu');

    const consumbalesTitle = document.createElement('p');
    consumbalesTitle.setAttribute('class', 'consumables-title');
    consumbalesTitle.innerHTML = String(collectionTitle);

    const consumablesListContainer = document.createElement('div');
    consumablesListContainer.setAttribute('class', 'consumables-container');

    consumables.forEach((consumable) => {
      const consumableElement = document.createElement('div');
      consumableElement.setAttribute('class', 'consumable-item');
      consumableElement.innerHTML = consumable.name;
      consumablesListContainer.appendChild(consumableElement);
    });

    menuContainer.append(consumbalesTitle, consumablesListContainer);

    return menuContainer;
  }
}

customElements.define('restaurant-menu', RestaurantMenu);
