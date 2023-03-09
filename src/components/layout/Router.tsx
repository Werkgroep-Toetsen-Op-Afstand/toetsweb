import React, { FunctionComponent } from 'react';

import {route} from 'buro-lib-ts';
import {Route, Routes} from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import Home from '../pages/Home';
import Scan from '../pages/Scan';
import Result from '../pages/Result';

interface Props {
    children?: any;
}

const Router: FunctionComponent<Props> = ({ children }) => {

    return (
        <Routes>
            <Route path={route('home')} element={<Home />} />
            <Route path={route('scan')} element={<Scan />} />
            <Route path={route('result')} element={<Result />} />
            { children }

            <Route path={'/*'} element={<NotFoundPage />} />
        </Routes>
    );
};

export default Router;
