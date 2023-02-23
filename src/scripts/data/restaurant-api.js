import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPI {
  static async restaurantsList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }

  static async searchRestaurant(searchString) {
    const response = await fetch(API_ENDPOINT.SEARCH(searchString));
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async addReview(id, name, review) {
    const reviewContent = {
      id,
      name,
      review,
    };
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewContent),
    });
    const responseJSON = await response.json();
    return responseJSON;
  }

  static getImageSrc(pictureId, size) {
    const sizes = ['small', 'medium', 'large'];
    if (sizes.includes(`${size}`.toLowerCase())) {
      return API_ENDPOINT.PICTURE(pictureId, size);
    }
    throw EvalError('size is either, "small", "medium" or "large".');
  }
}

export default RestaurantAPI;
