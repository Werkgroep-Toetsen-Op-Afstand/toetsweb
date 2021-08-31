import React, { FunctionComponent } from 'react';
import User from '../../networking/models/User';
import UserCard from './UserCard';

interface Props {
    users: User[];
}

const UserList: FunctionComponent<Props> = ({ users }) => {

    return (
        <div className={'user-list'}>
            { users.map(user => (
                <UserCard user={user} key={user.id} />
            )) }
        </div>
    );
};

export default UserList;
