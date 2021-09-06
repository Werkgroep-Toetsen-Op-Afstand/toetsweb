import {RouteContainer, RouteType} from 'react-ts-boiler';
import Home from '../components/pages/Home';
import Users from '../components/pages/Users';
import NewUser from '../components/pages/NewUser';
import Events from '../components/pages/Events';

const routes = new RouteContainer();

routes.add('/', Home, 'home');

routes.group('/users', () => {
    routes.add('/', Users, 'users');
    routes.add('/new', NewUser, 'new-user');
}, RouteType.PUBLIC);

routes.add('/events', Events, 'events');

export default routes.getRoutes();
