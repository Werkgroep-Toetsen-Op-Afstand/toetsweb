import React, { FunctionComponent } from 'react';

import { Router as BoilerRouter } from 'react-ts-boiler';
import {useAuth} from '../../contexts/AuthContext';

interface Props {
    children?: any;
}

const Router: FunctionComponent<Props> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return (
        <BoilerRouter isAuthenticated={isAuthenticated}>
            { children }
        </BoilerRouter>
    );
};

export default Router;
