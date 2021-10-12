import React, { FunctionComponent } from 'react';

import { Router as BoilerRouter } from 'react-ts-boiler';
import { Route } from 'react-router-dom';

import {useAuth} from '../../contexts/AuthContext';
import NotFoundPage from '../pages/NotFoundPage';

interface Props {
    children?: any;
}

const Router: FunctionComponent<Props> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return (
        <BoilerRouter isAuthenticated={isAuthenticated}>
            { children }

            <Route exact={false} component={NotFoundPage} />
        </BoilerRouter>
    );
};

export default Router;
