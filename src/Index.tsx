import { Application } from './lib/main/Application';

import './app.scss';
import './lib/main/index.scss';

const element = document.getElementById('app-root');
if (element) {
  const app = new Application(element);
  app.init();
}
