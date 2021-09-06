import React, { FunctionComponent } from 'react';
import {NavLink} from 'react-router-dom';

interface Props {
    children: any;
    to: string;
    exact?: boolean;
}

const SidebarMenuItem: FunctionComponent<Props> = ({ children, to, exact = true }) => {

    return (
        <NavLink className={'sidebar-menu__item'} activeClassName={'sidebar-menu__item--active'} exact={exact} to={to}>
            { children }
        </NavLink>
    );
};

export default SidebarMenuItem;
