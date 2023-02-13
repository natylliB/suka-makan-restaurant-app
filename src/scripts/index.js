import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import app from './views/app';

window.addEventListener('load', () => {
  app.start();
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
