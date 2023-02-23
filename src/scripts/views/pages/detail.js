import RestaurantAPI from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';
import LoaderScreenControl from '../webcomponents/loader-screen-control';
import '../webcomponents/category-list';
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
    this.#renderDetail(restaurant);

    LoaderScreenControl.hideLoader();
  }

  #renderDetail({
    name,
    description,
    city,
    address,
    pictureId,
    categories,
  }) {
    const pageContent = document.querySelector('#pageContent');

    pageContent.innerHTML = `
      <img class="restaurant-detail__cover" src=${RestaurantAPI.getImageSrc(pictureId, 'medium')}>
      <h2 class="restaurant-detail__name">${name}</h2>
      <p class="restaurant-detail__city">Kota: ${city}</p>
      <p class="restaurant-detail__address">Alamat: ${address}</p>
      <category-list></category-list>
      <p class="restaurant-detail__description">${description}</p>
    `;

    const categoryList = document.querySelector('category-list');
    categoryList.render(categories, '#FEA82F', 'white');
  }
}

export default Detail;
