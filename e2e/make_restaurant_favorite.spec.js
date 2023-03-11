Feature('Make Restaurant Favorite');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite page', ({ I }) => {
  I.seeElement({ shadow: 'loader-screen' });
  // I.seeElement({ shadow: ['restaurant-collection'] });
  // I.seeElement({ shadow: ['restaurant-collection', 'div.restaurant-collection__error', 'img.restaurant-collection__error-icon'] });
  // I.see('Tidak ada favorit!', { shadow: ['restaurant-collection', 'div.restaurant-collection__error', 'div', 'p.restaurant-collection__error-title'] });
  // I.see('Anda belum punya restoran favorit, ayo jelajah sekarang.', { shadow: ['restaurant-collection', 'div.restaurant-collection__error', 'div', 'p.restaurant-collection__error-text'] });
});
