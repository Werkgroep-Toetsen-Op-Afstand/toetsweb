import React, { FunctionComponent } from 'react';
import {useTheme} from 'react-ts-boiler';

interface Props {
    children: any;
}

const SidebarMenu: FunctionComponent<Props> = ({ children }) => {
    const { theme } = useTheme();

    return (
        <aside className={`sidebar-menu sidebar-menu--${theme.modifier}`}>
            { children }
        </aside>
    );
};

export default SidebarMenu;
