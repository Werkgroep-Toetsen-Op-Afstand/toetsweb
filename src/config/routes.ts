import { RouteContainer } from 'react-ts-boiler';
import Home from '../components/pages/Home';
import Users from '../components/pages/Users';
import NewUser from '../components/pages/NewUser';

const routes = new RouteContainer();

routes.add('/', Home, 'home');
routes.add('/users', Users, 'users');
routes.add('/users/new', NewUser, 'new-user');

export default routes.getRoutes();
