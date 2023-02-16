import RestaurantAPI from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';
import Page from './page';

class Detail extends Page {
  constructor(pageTitle = 'Halaman Detail') {
    super(pageTitle);
  }

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAPI.restaurantDetail(url.id);
    console.log(restaurant);
  }
}

export default Detail;
