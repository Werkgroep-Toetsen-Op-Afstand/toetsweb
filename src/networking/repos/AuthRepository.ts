import {Repository, RequestMethod} from 'react-ts-boiler';
import User from '../models/User';

class AuthRepository extends Repository {

    public constructor() {
        super('/');
    }

    public getCurrentUser() {
        return this.request<User>(this.url('users/1'), RequestMethod.GET).sendRaw();
    }
}

export default AuthRepository;
