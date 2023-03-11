import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const addFavoriteButtonTiedWithRestaurant = async (restaurantId) => {
  const favoriteButton = document.createElement('favorite-button');
  await favoriteButton.initialize({
    restaurantId,
    favoriteRestaurant: FavoriteRestaurantIdb,
    favoriteCallback: async () => {
      FavoriteRestaurantIdb.putRestaurant(restaurantId ? { id: 1 } : {});
    },
    unfavoriteCallback: async () => FavoriteRestaurantIdb.deleteRestaurant(1),
  });
  document.body.innerHTML = '';
  document.body.append(favoriteButton);
};

export { addFavoriteButtonTiedWithRestaurant };
