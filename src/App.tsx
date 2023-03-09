import React, {FunctionComponent, useEffect} from 'react';
import {
    BuroApp,
    groupListeners,
    onEventOnce,
    onEvent,
    createTranslator,
    app
} from 'buro-lib-ts';

import routes from './config/routes';

import Layout from './components/layout/Layout';

app({
    routingConfig: { routes },
    translator: createTranslator({ nl: {} })
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
            <Layout />
        </BuroApp>
    );
};

export default App;
