import './webcomponents/app-bar';
import routing from '../routes/routing-implementation';

class App {
  #header = null;

  #content = null;

  #footer = null;

  constructor() {
    this.#header = document.querySelector('header');
    this.#content = document.querySelector('#appContent');
    this.#footer = document.querySelector('footer');
    this.#initializeAppShell();
  }

  #initializeAppShell() {
    this.#setupHeader();
    this.#setupFooter();
  }

  #setupHeader() {
    this.#header.innerHTML += `
      <app-bar></app-bar>
    `;
  }

  #setupFooter() {
    this.#footer.innerHTML = `
      <p class="footerText">Suka Makan <span>&copy;</span> 2023</p>
    `;
  }

  async renderPage() {
    const page = routing.getCurrentPage();
    this.#content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
