import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPI {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }

  static async searchRestaurant(searchString) {
    const response = await fetch(API_ENDPOINT.SEARCH(searchString));
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async addReview({ id, name, review }) {
    const reviewContent = {
      id,
      name,
      review,
    };
    JSON.stringify(reviewContent);
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: reviewContent,
    });
    const responseJSON = await response.json();
    return responseJSON;
  }
}

export default RestaurantAPI;
