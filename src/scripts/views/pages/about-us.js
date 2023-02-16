import Page from './page';

class AboutUs extends Page {
  async render() {
    return '<h2>Tentang Kami</h2>';
  }

  async afterRender() {
    // TODO
  }
}

export default AboutUs;
