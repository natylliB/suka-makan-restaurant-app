import Page from './page';

class Review extends Page {
  constructor(pageTitle = 'Review: ') {
    super(pageTitle);
  }

  async afterRender() {
    // run after the page is rendered
  }
}

export default Review;
