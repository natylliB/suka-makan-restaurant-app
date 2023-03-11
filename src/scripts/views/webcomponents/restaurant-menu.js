class RestaurantMenu extends HTMLElement {
  render(menus) {
    const foodsMenu = this.#createMenuCollection(menus.foods, 'Makanan:');
    const drinksMenu = this.#createMenuCollection(menus.drinks, 'Minuman:');

    this.append(foodsMenu, drinksMenu);
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
