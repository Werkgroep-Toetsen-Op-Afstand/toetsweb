import React, { FunctionComponent } from 'react';
import Content from './Content';
import Router from './Router';
import NavBar from "./nav/NavBar";
import {ToastContainer} from "react-toastify";

interface Props {}

const Layout: FunctionComponent<Props> = () => {

    return (
        <React.Fragment>
            <NavBar/>
            <ToastContainer/>
            <Content>
                <Router />
            </Content>
        </React.Fragment>
    );
};

export default Layout;
