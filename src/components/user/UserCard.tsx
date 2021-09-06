import React, { FunctionComponent } from 'react';

import User from '../../networking/models/User';
import {ClassBuilder, useTheme} from 'react-ts-boiler';
import Card from '../layout/Card';

interface Props {
    user: User;
}

const UserCard: FunctionComponent<Props> = ({ user }) => {
    const { theme } = useTheme();

    return (
        <Card className={`user-card user-card--${theme.modifier}`}>
            <p className={'user-card__title'}>{ user.username }</p>
            <p className={'user-card__email'}>{ user.email }</p>
        </Card>
    );
};

export default UserCard;
