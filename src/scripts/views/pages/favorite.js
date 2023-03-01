import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../webcomponents/restaurant-collection';
import LoaderScreenControl from '../webcomponents/loader-screen-control';
import Page from './page';

class Favorite extends Page {
  async render() {
    return `
    <div id="pageContent" class="page-content">
      <restaurant-collection></restaurant-collection>
    </div>
    `
  }

  async afterRender() {
    LoaderScreenControl.showLoader();

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const title = 'Restoran Favorit';

    LoaderScreenControl.hideLoader();
    const restaurantCollection = document.querySelector('restaurant-collection');
    restaurantCollection.initialize( 
      restaurants,
      title,
      this.#handlerForCollectionItem,
      {title: 'Tidak ada favorit!', text: 'Anda belum punya restoran favorit, ayo jelajah sekarang.'});
  }

  #handlerForCollectionItem = (itemId) => {
    window.location.href = `#/detail/${itemId}`;
  };
}

export default Favorite;
