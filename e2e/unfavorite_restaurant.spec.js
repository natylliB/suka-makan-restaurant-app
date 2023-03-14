/* eslint-disable no-undef */
Feature('Make Restaurant Unfavorite');

Before(({ I }) => {
  I.amOnPage('/#/home');

  I.wait(2);

  I.seeElement({ css: '.restaurant-item__text-name' });

  I.click(locate({ css: '.restaurant-item__text-name' }).first());

  I.seeElement({ css: '#btnFavorite' });

  I.click(locate({ css: '#btnFavorite' }));

  I.amOnPage('/#/favorite');
});

Scenario('Unfavorite a Restaurant', async ({ I }) => {
  I.wait(2);

  I.seeElement({ css: 'restaurant-item' });

  const firstFavoriteRestaurantTitle = await I.grabTextFrom({ css: '.restaurant-item__text-name' });

  I.click(locate({ css: '.restaurant-item__text-name' }));

  I.seeElement({ css: '#btnUnfavorite' });

  I.click(locate({ css: '#btnUnfavorite' }));

  I.amOnPage('/#/favorite');

  // pastikan daftar favorite kosong
  I.dontSee({ css: 'restaurant-item' });

  I.amOnPage('/#/home');

  I.seeElement({ css: 'restaurant-item' });

  const previouslyFavoriteRestaurant = locate({ css: '.restaurant-item__text-name' }).withText(firstFavoriteRestaurantTitle);

  I.click(previouslyFavoriteRestaurant);

  // pastikan tombol favorite restoran sebelumnya benar dengan mendeteksi tipe favorite button
  I.seeElement({ css: '#btnFavorite' });
});
