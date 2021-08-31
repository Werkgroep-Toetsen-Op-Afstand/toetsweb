import React, { FunctionComponent } from 'react';
import {Page, route} from 'react-ts-boiler';
import {Link} from 'react-router-dom';

interface Props {}

const Home: FunctionComponent<Props> = () => {

    return (
        <Page>
            <Link to={route('users')}>Users</Link>

            <br />

            <Link to={route('new-user')}>New user</Link>
        </Page>
    );
};

export default Home;
