class CategoryList extends HTMLElement {
  #shadowRoot = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  render(categories, bgColor = '#888', color = 'black') {
    this.#shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .category-list__container {
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          gap: 4px;
          padding: 8px 0;
          margin: 0 16px 8px;
          border-top: 1px solid #FF6701;
          border-bottom: 1px solid #FF6701;
        }

        .category-list__item {
          background-color: ${bgColor};
          color: ${color};
          padding: 4px 8px;
          border-radius: 13.5px 13.5px;
        }

        .category-list__title {
          margin: 4px 16px;

          color: #FF6701;
          font-weight: bold;
        }
      </style>
      <p class="category-list__title">Kategori:</p>
    `;

    const categoryListContainer = document.createElement('div');
    categoryListContainer.setAttribute('class', 'category-list__container');

    categories.forEach((cateogory) => {
      const category = this.#createCategory(cateogory);
      categoryListContainer.appendChild(category);
    });

    this.#shadowRoot.appendChild(categoryListContainer);
  }

  #createCategory(category) {
    const categoryItem = document.createElement('div');
    categoryItem.setAttribute('class', 'category-list__item');

    categoryItem.innerHTML = `${category.name}`;

    return categoryItem;
  }
}

customElements.define('category-list', CategoryList);
