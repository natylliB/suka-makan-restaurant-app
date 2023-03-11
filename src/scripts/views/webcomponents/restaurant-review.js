import './review-collection';
import './add-review';

class RestaurantReview extends HTMLElement {
  render(customerReviews) {
    this.innerHTML = '<p class="review-title">Reviews:</p>';

    const reviewCollection = this.#createReviewCollection(customerReviews);

    const addReview = this.#creatAddReviewComponent();

    this.append(reviewCollection, addReview);
  }

  #createReviewCollection(customerReviews) {
    const reviewCollection = document.createElement('review-collection');
    reviewCollection.setAttribute('class', 'review-collection');
    reviewCollection.reviews = customerReviews;
    return reviewCollection;
  }

  #creatAddReviewComponent() {
    const addReview = document.createElement('add-review');
    addReview.initialize((JSONObject) => {
      if (JSONObject.error) {
        console.error('gagal menambahkan review');
        return;
      }
      console.log('sukses menambahkan review');
      location.reload(true);
    });

    return addReview;
  }
}

customElements.define('restaurant-review', RestaurantReview);
