import Page from './page';

class Favorite extends Page {
  async render() {
    return '<h2>Restoran Yang Disukai</h2>';
  }

  async afterRender() {
    // run after render
  }
}

export default Favorite;
