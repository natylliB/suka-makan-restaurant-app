class ReviewCollection extends HTMLElement {
  #reviews = null;

  set reviews(reviews) {
    this.#reviews = reviews;
    this.#render();
  }

  #render() {
    const reviewsContainer = document.createElement('div');
    reviewsContainer.setAttribute('class', 'review-container');

    this.#reviews.forEach((review) => {
      const reviewItem = this.#createReviewItem(review);
      reviewsContainer.appendChild(reviewItem);
    });

    this.appendChild(reviewsContainer);
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
