import Page from './page';

class Home extends Page {
  async render() {
    return '<h2>Menu Utama</h2>';
  }

  async afterRender() {
    // run after the page is rendered
  }
}

export default Home;
