import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';

const main = () => {
  const app = new App();

  app.renderPage();

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
};

window.addEventListener('load', () => {
  main();
});
