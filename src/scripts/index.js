import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './views/webcomponents/loader-screen';
import App from './views/app';
import swRegister from './utils/sw-register';

const main = () => {
  const app = new App();

  app.renderPage();

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
};

window.addEventListener('load', () => {
  main();
  swRegister();
});