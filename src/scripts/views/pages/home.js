import RestaurantAPI from '../../data/restaurant-api';
import '../webcomponents/search-bar';
import Page from './page';

class Home extends Page {
  constructor(pageTitle = 'Menu Utama') {
    super(pageTitle);
  }

  async render() {
    return `
      <div id="pageContent" class="page-content">
          <div class="hero">
            <div class="hero__inner">
              <h1 class="hero__inner-title">Restoran Nusantara</h1>
              <p class="hero__inner-text">Jelajahi pilihan restoran nusantara yang dikutip kami.</p>
              <search-bar></search-bar>
            </div>
          </div>
      </div>
    `;
  }

  async afterRender() {
    const restaurants = await RestaurantAPI.restaurantsList();
    console.log(restaurants);
  }
}

export default Home;
