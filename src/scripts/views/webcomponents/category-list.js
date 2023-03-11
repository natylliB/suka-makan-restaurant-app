class CategoryList extends HTMLElement {
  render(categories) {
    this.innerHTML = '<p class="category-list__title">Kategori:</p>';

    const categoryListContainer = document.createElement('div');
    categoryListContainer.setAttribute('class', 'category-list__container');

    categories.forEach((cateogory) => {
      const category = this.#createCategory(cateogory);
      categoryListContainer.appendChild(category);
    });

    this.appendChild(categoryListContainer);
  }

  #createCategory(category) {
    const categoryItem = document.createElement('div');
    categoryItem.setAttribute('class', 'category-list__item');

    categoryItem.innerHTML = `${category.name}`;

    return categoryItem;
  }
}

customElements.define('category-list', CategoryList);
