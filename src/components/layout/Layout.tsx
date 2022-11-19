import React, { FunctionComponent } from 'react';
import Content from './Content';
import Router from './Router';
import { useLocalization} from 'react-ts-boiler';

interface Props {}

const Layout: FunctionComponent<Props> = () => {
    const { __ } = useLocalization();

    return (
        <React.Fragment>

            <Content>
                <Router />
            </Content>
        </React.Fragment>
    );
};

export default Layout;
