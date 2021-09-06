import React, {FunctionComponent, useEffect} from 'react';
import {emitEvent, Page} from 'react-ts-boiler';
import Card from '../layout/Card';
import Button from '../layout/Button';

interface Props {}

const Events: FunctionComponent<Props> = () => {

    useEffect(() => {
    }, []);

    return (
        <Page className={'events-page'}>
            <Card>
                <p>Sick ain't it</p>

                <div className={'events-page__actions'}>
                    <Button onClick={() => emitEvent('ALERT', 'Alert from App.tsx!')}>Alert that works every time</Button>
                    <Button onClick={() => emitEvent('ALERT_ONCE')}>Alert that works only once</Button>
                </div>
            </Card>
        </Page>
    );
};

export default Events;
