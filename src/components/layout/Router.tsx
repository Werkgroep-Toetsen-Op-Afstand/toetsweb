import React, { FunctionComponent } from 'react';

import { Router as BoilerRouter } from 'react-ts-boiler';
import { Route } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';

interface Props {
    children?: any;
}

const Router: FunctionComponent<Props> = ({ children }) => {

    return (
        <BoilerRouter isAuthenticated={true}>
            { children }

            <Route exact={false} component={NotFoundPage} />
        </BoilerRouter>
    );
};

export default Router;
