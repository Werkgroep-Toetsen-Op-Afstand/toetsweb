import {ModelRepository, RequestMethod} from 'react-ts-boiler';
import User from '../models/User';

class UserRepository extends ModelRepository<User> {

    public constructor() {
        super('/users');
    }

    public all(): Promise<User[]> {
        return this.request<User[]>(this.url(), RequestMethod.GET).sendRaw();
    }
}

export default UserRepository;
