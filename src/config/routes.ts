import {RouteContainer, RouteType} from 'react-ts-boiler';
import Home from '../components/pages/Home';
import Scan from '../components/pages/Scan';

const routes = new RouteContainer();

routes.add('/', Home, 'home');
routes.add('/scan', Scan, 'scan');

export default routes.getRoutes();
