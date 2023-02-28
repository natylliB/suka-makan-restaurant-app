import './review-collection';
import './add-review';

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

    const reviewCollection = this.#createReviewCollection(customerReviews);

    const addReview = this.#creatAddReviewComponent();

    this.#shadowRoot.append(reviewCollection, addReview);
  }

  #createReviewCollection(customerReviews) {
    const reviewCollection = document.createElement('review-collection');
    reviewCollection.setAttribute('class', 'review-collection');
    reviewCollection.reviews = customerReviews;
    return reviewCollection;
  }

  // #renewReviewData(customerReviews) {
  //   const reviewCollection = this.#shadowRoot.querySelector('review-collection');
  //   reviewCollection.reviews = customerReviews;
  // }

  #creatAddReviewComponent() {
    const addReview = document.createElement('add-review');
    addReview.initialize((JSONObject) => {
      if (JSONObject.error) {
        console.error('gagal menambahkan review');
        return;
      }
      console.log('sukses menambahkan review');
      // this.#renewReviewData(JSONObject.customerReviews);
      location.reload(true);
    });

    return addReview;
  }
}

customElements.define('restaurant-review', RestaurantReview);
