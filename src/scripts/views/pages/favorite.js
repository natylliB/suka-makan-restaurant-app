import Page from './page';

class Favorite extends Page {
  constructor(pageTitle = 'Restoran Yang Disukai') {
    super(pageTitle);
  }

  async afterRender() {
    // run after render
  }
}

export default Favorite;
