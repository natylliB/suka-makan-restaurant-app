class ReviewCollection extends HTMLElement {
  #shadowRoot = null;

  #reviews = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  set reviews(reviews) {
    this.#reviews = reviews;
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
        .review-container {
          display: flex;
          flex-direction: column;
          margin: 8px 16px;
          gap: 8px;
        }
        .review-item {
          box-shadow: 0 2px 4px 0 rgba( 0, 0, 0, .4 );
          padding: 16px;
        }
        .review-item__customer-name {
          font-weight: bold;
        }
        .review-item__date {
          color: #888;
          margin: 8px 0 16px;
          font-size: .8em;
        }
      </style>
    `;

    const reviewsContainer = document.createElement('div');
    reviewsContainer.setAttribute('class', 'review-container');

    this.#reviews.forEach((review) => {
      const reviewItem = this.#createReviewItem(review);
      reviewsContainer.appendChild(reviewItem);
    });

    this.#shadowRoot.appendChild(reviewsContainer);
  }

  #createReviewItem(review) {
    const reviewItem = document.createElement('div');
    reviewItem.setAttribute('class', 'review-item');

    reviewItem.innerHTML = `
      <p class="review-item__customer-name">${review.name}</p>
      <p class="review-item__date">${review.date}</p>
      <p class="review-item__review">${review.review}</p>
    `;

    return reviewItem;
  }
}

customElements.define('review-collection', ReviewCollection);
