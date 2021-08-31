import React, {FunctionComponent} from 'react';
import {
    BoilerApp,
    enableRouting,
    enableLocalization,
    enableTheming,
    enableNetworking,
} from 'react-ts-boiler';

import routes from './config/routes';
import lang from './config/lang';
import networking from './config/networking';

import AuthContextProvider from './contexts/AuthContext';
import Router from './components/layout/Router';

enableNetworking(networking);
enableTheming({ themes: [] });
enableLocalization(lang);
enableRouting({ routes });

const App: FunctionComponent = () => {

    return (
        <BoilerApp>
            <AuthContextProvider>
                <Router />
            </AuthContextProvider>
        </BoilerApp>
    );
};

export default App;
