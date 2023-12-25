import {FunctionComponent, ReactNode} from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import Home from '../pages/Home';
import Scan from '../pages/Scan';
import Result from '../pages/Result';

interface Props {
    children?: ReactNode;
}

const Router: FunctionComponent<Props> = ({children}) => {

    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"scan"} element={<Scan/>}/>
                <Route path={"result"} element={<Result/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
