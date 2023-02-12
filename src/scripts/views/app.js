import './webcomponents/app-bar';

class App {
  constructor() {
    this._header = document.querySelector('header');
    this._main = document.querySelector('main');
    this._footer = document.querySelector('footer');
  }

  start() {
    this._initializeAppShell();
  }

  _initializeAppShell() {
    this._setupHeader();
    this._setupMain();
    this._setupFooter();
  }

  _setupHeader() {
    const appBar = document.createElement('app-bar');
    this._header.setAttribute('id', 'home');
    this._header.append(appBar);
  }

  _setupMain() {
    this._main.setAttribute('id', 'main');
  }

  _setupFooter() {
    this._footer.innerHTML = `
      <p class="footerText">Suka Makan <span>&copy;</span> 2023</p>
    `;
  }
}

export default App;
