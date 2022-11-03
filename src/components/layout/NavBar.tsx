import React, { FunctionComponent } from 'react';
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import NavItem from './NavItem';

const NavBar: FunctionComponent = () => {

    return (
        <nav className={'navbar'}>
            <div className={'navbar__content'}>
                <ReactRouterNavLink exact={true} to={'/'}>
                    <div className={"navbar__container"}>
                        <h1>Toetsweb</h1>
                    </div>
                </ReactRouterNavLink>

                <div className='navbar__content__right'>
                    <ReactRouterNavLink exact={true} to={'/'}>
                        <NavItem item={'Het toetsweb'} color={'purple'}/>
                    </ReactRouterNavLink>

                    <ReactRouterNavLink exact={true} to={'/scan'}>
                        <NavItem item={'Toetsweb scan'} color={'orange'}/>
                    </ReactRouterNavLink>

                    <ReactRouterNavLink exact={true} to={'/result'}>
                        <NavItem item={'Resultaat'} color={'green'}/>
                    </ReactRouterNavLink>
                </div>
            </div>
        </nav>
    );
};
 
export default NavBar;
