import React, { FunctionComponent } from 'react';
import Content from './Content';
import Router from './Router';

interface Props {}

const Layout: FunctionComponent<Props> = () => {

    return (
        <React.Fragment>

            <Content>
                <Router />
            </Content>
        </React.Fragment>
    );
};

export default Layout;
