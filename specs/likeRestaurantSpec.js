/* eslint-disable no-undef */
import '../src/scripts/views/webcomponents/favorite-button';
import { addFavoriteButtonTiedWithRestaurant as addFavoriteButton } from './helper/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Liking a restaurant', () => {
  const getFavoriteButton = (querySelector) => document.querySelector('favorite-button').querySelector(querySelector);

  it('should show favorite button when the restaurant has not been favorite before', async () => {
    await addFavoriteButton(1);
    expect(getFavoriteButton('[aria-label="favorite"]')).toBeTruthy();
  });

  it('should not show unfavorite button when the restaurant has not been favorite before', async () => {
    await addFavoriteButton(1);
    expect(getFavoriteButton('[aria-label="unfavorite"]')).toBeFalsy();
  });

  it('should be able to favorite a restaurant', async () => {
    await addFavoriteButton(1);

    getFavoriteButton('#btnFavorite').dispatchEvent(new Event('click'));

    const favoriteRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(favoriteRestaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add restaurant again when its already favorite', async () => {
    await addFavoriteButton(1);

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    getFavoriteButton('#btnFavorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await addFavoriteButton();

    getFavoriteButton('#btnFavorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
