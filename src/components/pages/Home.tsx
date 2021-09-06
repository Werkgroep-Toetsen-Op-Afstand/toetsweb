import React, { FunctionComponent } from 'react';
import {Page, route} from 'react-ts-boiler';

interface Props {}

const Home: FunctionComponent<Props> = () => {

    return (
        <Page className={'home-page'}>
            <p>Sup</p>
        </Page>
    );
};

export default Home;
