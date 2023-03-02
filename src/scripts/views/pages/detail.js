import RestaurantAPI from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';
import LoaderScreenControl from '../webcomponents/loader-screen-control';
import '../webcomponents/category-list';
import '../webcomponents/restaurant-menu';
import '../webcomponents/restaurant-review';
import '../webcomponents/favorite-button';
import Page from './page';

class Detail extends Page {
  async render() {
    return `
      <div id="pageContent" class="page-content">
      </div>
    `;
  }

  async afterRender() {
    LoaderScreenControl.showLoader();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAPI.restaurantDetail(url.id);
    await this.#renderDetail(restaurant);

    LoaderScreenControl.hideLoader();
  }

  async #renderDetail({
    id,
    name,
    description,
    city,
    address,
    pictureId,
    categories,
    menus,
    rating,
    customerReviews,
  }) {
    const pageContent = document.querySelector('#pageContent');

    pageContent.innerHTML = `
      <div class="restaurant-detail">
        <div class="restaurant-detail__cover">
          <img class="restaurant-detail__cover-img" aria-label="Restoran: ${name}"src=${RestaurantAPI.getImageSrc(pictureId, 'medium')}>
          <favorite-button></favorite-button>
        </div>
        <h2 class="restaurant-detail__name">${name}</h2>
        <p class="restaurant-detail__rating">Rating: ${Number(rating).toFixed(1)}</p>
        <p class="restaurant-detail__city">Kota: ${city}</p>
        <p class="restaurant-detail__address">Alamat: ${address}</p>
        <category-list></category-list>
        <p class="restaurant-detail__description">${description}</p>
        <restaurant-menu></restaurant-menu>
        <restaurant-review></restaurant-review>
      </div>
    `;

    const categoryList = document.querySelector('category-list');
    categoryList.render(categories, '#FEA82F', 'white');

    const restaurantMenu = document.querySelector('restaurant-menu');
    restaurantMenu.render(menus);

    const restaurantReview = document.querySelector('restaurant-review');
    restaurantReview.render(customerReviews);

    const favoriteButton = document.querySelector('favorite-button');
    await favoriteButton.intialize({
      id,
      name,
      city,
      pictureId,
      rating,
      description,
    });
  }
}

export default Detail;
