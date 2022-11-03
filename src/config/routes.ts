import {RouteContainer} from 'react-ts-boiler';
import Home from '../components/pages/Home';
import Scan from '../components/pages/Scan';
import Result from "../components/pages/Result";

const routes = new RouteContainer();

routes.add('/', Home, 'home');
routes.add('/scan', Scan, 'scan');
routes.add('/result', Result, 'result');

export default routes.getRoutes();
