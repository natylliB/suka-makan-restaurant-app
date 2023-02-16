import Page from './page';

class Review extends Page {
  async render() {
    return '<h2>Review</h2>';
  }

  async afterRender() {
    // run after the page is rendered
  }
}

export default Review;
