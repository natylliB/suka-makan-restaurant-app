import './webcomponents/app-bar';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

const app = {
  start() {
    this._initializeAppShell();
  },

  _initializeAppShell() {
    this._setupHeader();
    this._setupMain();
    this._setupFooter();
  },

  _setupHeader() {
    const header = document.querySelector('header');
    header.innerHTML = `
      <app-bar></app-bar>
    `;
  },

  _setupMain() {
    const main = document.querySelector('main');
    main.innerHTML = `
      <div id="appContent"></div>
    `;
  },

  _setupFooter() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
      <p class="footerText">Suka Makan <span>&copy;</span> 2023</p>
    `;
  },

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log(url);
    const page = routes[url];
    const content = document.querySelector('#appContent');
    content.innerHTML = await page.render();
    await page.afterRender();
  },
};

export default app;
