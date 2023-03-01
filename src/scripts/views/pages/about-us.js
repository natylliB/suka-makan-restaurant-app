import Page from './page';

class AboutUs extends Page {
  async render() {
    return `
      <div id="pageContent" class="page-content">
        <h2 class="about-us__title">Tentang Kami</h2>
        <p class="about-us__content">Kunjungi profile <a href="https://www.linkedin.com/in/billy-tan-0ba29a7a/" target="_blank">linkedin</a> saya.</p>
      </div>
    `;
  }

  async afterRender() {
    return '';
  }
}

export default AboutUs;
