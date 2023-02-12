import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';

const app = new App();

window.addEventListener('load', () => {
  app.start();
});
