import React, { FunctionComponent } from 'react';
import SidebarMenu from './sidebar/SidebarMenu';
import Content from './Content';
import Router from './Router';
import SidebarMenuItem from './sidebar/SidebarMenuItem';
import {route, useLocalization} from 'react-ts-boiler';

interface Props {}

const Layout: FunctionComponent<Props> = () => {
    const { __ } = useLocalization();

    return (
        <React.Fragment>
            <SidebarMenu>
                <SidebarMenuItem to={route('home')}>Home</SidebarMenuItem>
                <SidebarMenuItem to={route('users')}>{ __('users') }</SidebarMenuItem>
                <SidebarMenuItem to={route('new-user')}>{ __('newUser') }</SidebarMenuItem>
                <SidebarMenuItem to={route('events')}>Events</SidebarMenuItem>
            </SidebarMenu>

            <Content>
                <Router />
            </Content>
        </React.Fragment>
    );
};

export default Layout;
