import React, { FunctionComponent } from 'react';
import {Page, route} from 'buro-lib-ts';
import { NavLink as ReactRouterNavLink } from "react-router-dom";

interface Props {}

const NotFoundPage: FunctionComponent<Props> = () => {

    return (
        <Page className={'not-found-page'}>
            <h2>404 Pagina niet gevonden</h2>
            <ReactRouterNavLink to={route('home')}>
                <div className='not-found-page__button'>
                    <p>Terug naar home</p>
                </div>
            </ReactRouterNavLink>
        </Page>
    );
};

export default NotFoundPage;
