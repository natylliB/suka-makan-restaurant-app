import Page from './page';

class Detail extends Page {
  async render() {
    return '<h2>Halaman Detail</h2>';
  }

  async afterRender() {
    // run after render
  }
}

export default Detail;
