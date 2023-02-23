import RestaurantAPI from '../../data/restaurant-api';
import '../webcomponents/search-bar';
import '../webcomponents/restaurant-collection';
import LoaderScreenControl from '../webcomponents/loader-screen-control';
import Page from './page';

class Home extends Page {
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
            <restaurant-collection></restaurant-collection>
      </div>
    `;
  }

  async afterRender() {
    const searchBar = document.querySelector('search-bar');
    searchBar.addSearchHandler(this.#handlerForSearchBar);

    this.#updateCollection();
  }

  #handlerForCollectionItem = (itemId) => {
    window.location.href = `#/detail/${itemId}`;
  };

  #handlerForSearchBar = (searchString) => {
    this.#updateCollection(searchString);
  };

  async #updateCollection(searchString = '') {
    LoaderScreenControl.showLoader();

    const restaurants = searchString === ''
      ? await RestaurantAPI.restaurantsList()
      : await RestaurantAPI.searchRestaurant(searchString);

    const title = searchString === ''
      ? 'Jelajah Restoran'
      : `Restoran: ${searchString}`;

    LoaderScreenControl.hideLoader();
    const restaurantCollection = document.querySelector('restaurant-collection');
    restaurantCollection.initialize(restaurants, title, this.#handlerForCollectionItem);
  }
}

export default Home;
