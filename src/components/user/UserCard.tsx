import React, { FunctionComponent } from 'react';

import User from '../../networking/models/User';

interface Props {
    user: User;
}

const UserCard: FunctionComponent<Props> = ({ user }) => {

    return (
        <div className={'user-card'}>
            <p className={'user-card__title'}>{ user.username }</p>
            <p className={'user-card__email'}>{ user.email }</p>
        </div>
    );
};

export default UserCard;
