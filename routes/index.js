
import home from './home/home.routes';
import api from './api/api.routes';


export default function (app) {
  app.use('/', home);
  app.use('/api', api);
}
