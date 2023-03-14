/* eslint-disable no-undef */
const assert = require('assert');

Feature('Make Restaurant Favorite');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite page', ({ I }) => {
  I.seeElement({ css: 'loader-screen' });
  I.seeElement({ css: 'restaurant-collection' });
  I.wait(2);
  I.seeElement({ css: 'img.restaurant-collection__error-icon' });
  I.see('Tidak ada favorit!', { css: 'p.restaurant-collection__error-title' });
  I.see('Anda belum punya restoran favorit, ayo jelajah sekarang.', { css: 'p.restaurant-collection__error-text' });
});

Scenario('adding a favorite movie', async ({ I }) => {
  I.wait(2);

  I.see('Tidak ada favorit!', { css: 'p.restaurant-collection__error-title' });

  I.amOnPage('/#/home');

  I.seeElement({ css: '.restaurant-item__text-name' });

  const firstRestaurant = locate({ css: '.restaurant-item__text-name' }).first();

  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement({ css: '#btnFavorite' });

  I.click(locate({ css: '#btnFavorite' }));

  I.amOnPage('/#/favorite');

  I.seeElement({ css: 'restaurant-item' });

  const favoriteRestaurantTitle = await I.grabTextFrom({ css: '.restaurant-item__text-name' });

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});
