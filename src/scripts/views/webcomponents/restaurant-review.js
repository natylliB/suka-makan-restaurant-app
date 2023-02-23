import './review-collection';

class RestaurantReview extends HTMLElement {
  #shadowRoot = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  render(customerReviews) {
    this.#shadowRoot.innerHTML = `
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .review-title {
          color: #FF6701;
          font-weight: bold;
          margin: 8px 16px;
          border-bottom: 1px solid #FF6701;

        }
        .review-collection {
          width: 100%;
        }
      </style>
      
      <p class="review-title">Reviews:</p>
    `;

    const reviewCollection = document.createElement('review-collection');
    reviewCollection.setAttribute('class', 'review-collection');
    reviewCollection.reviews = customerReviews;

    this.#shadowRoot.appendChild(reviewCollection);
  }
}

customElements.define('restaurant-review', RestaurantReview);
