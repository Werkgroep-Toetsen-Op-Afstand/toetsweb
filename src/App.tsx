import React, {FunctionComponent, useEffect} from 'react';
import {
    BoilerApp,
    enableRouting,
    enableLocalization,
    enableTheming,
    enableNetworking, groupListeners, onEventOnce, onEvent,
} from 'react-ts-boiler';

import routes from './config/routes';
import lang from './config/lang';
import networking from './config/networking';
import theming from './config/theming';

import AuthContextProvider from './contexts/AuthContext';
import Layout from './components/layout/Layout';

enableNetworking(networking);
enableTheming(theming);
enableLocalization(lang);
enableRouting({routes});

const App: FunctionComponent = () => {

    useEffect(() => {
        return groupListeners([
            onEvent('ALERT', (message: string) => alert(message)),
            onEventOnce('ALERT_ONCE', () => alert('This event callback will only be fired once'))
        ]);
    }, []);

    return (
        <BoilerApp>
            <AuthContextProvider>
                <Layout/>
            </AuthContextProvider>
        </BoilerApp>
    );
};

export default App;
