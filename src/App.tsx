import React, {FunctionComponent, useEffect} from 'react';
import {app, BuroApp, createTranslator, groupListeners, onEvent, onEventOnce} from 'buro-lib-ts';

import routes from './config/routes';
import NavBar from "./components/layout/nav/NavBar";
import {ToastContainer} from "react-toastify";
import Router from "./components/layout/Router";
import {LanguageProvider} from "./utils/contexts/LanguageContext";

app({
    routingConfig: {routes},
    translator: createTranslator({nl: {}})
});

const App: FunctionComponent = () => {

    useEffect(() => {
        return groupListeners([
            onEvent('ALERT', (message: string) => alert(message)),
            onEventOnce('ALERT_ONCE', () => alert('This event callback will only be fired once'))
        ]);
    }, []);

    return (
        <BuroApp>
            <React.Fragment>
                <LanguageProvider>
                    <NavBar/>
                    <ToastContainer/>
                    <Router/>
                </LanguageProvider>
            </React.Fragment>
        </BuroApp>
    );
};

export default App;
