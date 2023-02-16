import AboutUs from '../views/pages/about-us';
import Review from '../views/pages/review';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';
import Routing from './routing';

const restaurantAppRoutes = {
  '/': new Home(),
  '/home': new Home(),
  '/favorite': new Favorite(),
  '/about-us': new AboutUs(),
  '/detail/:id': new Detail(),
  '/detail/:id/review': new Review(),
};

const routing = new Routing(restaurantAppRoutes);

export default routing;
