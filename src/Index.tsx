import { Application } from './Application';

import './app.scss';

const element = document.getElementById('app-root');
if (element) {
  const app = new Application(element);
  app.init();
}
