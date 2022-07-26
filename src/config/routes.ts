import {RouteContainer, RouteType} from 'react-ts-boiler';
import Home from '../components/pages/Home';

const routes = new RouteContainer();

routes.add('/', Home, 'home');

export default routes.getRoutes();
