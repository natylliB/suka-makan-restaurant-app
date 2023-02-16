import RestaurantAPI from '../../data/restaurant-api';
import Page from './page';

class Home extends Page {
  async render() {
    return '<h2>Menu Utama</h2>';
  }

  async afterRender() {
    const restaurants = await RestaurantAPI.restaurantsList();
    console.log(restaurants);
  }
}

export default Home;
