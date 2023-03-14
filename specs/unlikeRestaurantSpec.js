/* eslint-disable no-undef */

import '../src/scripts/views/webcomponents/favorite-button';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { addFavoriteButtonTiedWithRestaurant as addFavoriteButton } from './helper/testFactories';

describe('Unliking a restaurant', () => {
  const getFavoriteButton = (querySelector) => document.querySelector('favorite-button').querySelector(querySelector);

  beforeEach(async () => {
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    await addFavoriteButton(1);
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should show unfavorite button when the restaurant has been favorite before', () => {
    expect(getFavoriteButton('[aria-label="unfavorite"]')).toBeTruthy();
  });

  it('should not show favorite button when the restaurant has been favorite before', () => {
    expect(getFavoriteButton('[aria-label="favorite"')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    getFavoriteButton('#btnUnfavorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked movie is not in the list', async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    getFavoriteButton('#btnUnfavorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
