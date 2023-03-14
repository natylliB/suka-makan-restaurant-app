/* eslint-disable no-undef */
const assert = require('assert');

const todayInIndonesiaString = () => {
  const monthString = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = monthString[today.getMonth()];
  const currentYear = today.getFullYear();

  return `${currentDate} ${currentMonth} ${currentYear}`;
};

Feature('Add Review To Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('Add Review To Restaurant', async ({ I }) => {
  I.seeElement({ css: '.restaurant-item__text-name' });

  const firstRestaurant = locate({ css: '.restaurant-item__text-name' }).first();

  I.click(firstRestaurant);

  I.waitForElement({ css: 'form.add-review__form' }, 5);

  I.waitForElement({ css: '#inputName' }, 5);

  I.waitForElement({ css: '#reviewTextArea' }, 5);

  I.waitForElement({ css: '#btnPostReview' }, 5);

  I.fillField({ css: '#inputName' }, 'Billy');

  I.fillField({ css: '#reviewTextArea' }, 'Test Review Dari e2e');

  const reviewName = await I.grabValueFrom({ css: '#inputName' });

  const reviewText = await I.grabValueFrom({ css: '#reviewTextArea' });

  I.click({ css: '#btnPostReview' });

  const lastPostedReviewName = await I.grabTextFrom(locate('.review-item__customer-name').last());

  const lastPostedReviewDate = await I.grabTextFrom(locate('.review-item__date').last());

  const lastPostedReviewText = await I.grabTextFrom(locate('.review-item__review').last());

  assert.strictEqual(reviewName, lastPostedReviewName);

  assert.strictEqual(reviewText, lastPostedReviewText);

  const todayDate = todayInIndonesiaString();

  assert.strictEqual(lastPostedReviewDate, todayDate);
});
