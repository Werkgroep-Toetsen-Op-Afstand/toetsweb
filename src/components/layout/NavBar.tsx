import React, { FunctionComponent } from 'react';
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { route } from 'buro-lib-ts';
import NavItem from './NavItem';

const NavBar: FunctionComponent = () => {

    return (
        <nav className={'navbar'}>
            <div className={'navbar__content'}>
                <ReactRouterNavLink to={route('home')}>
                    <div className={"navbar__container"}>
                        <h1>Toetsweb</h1>
                    </div>
                </ReactRouterNavLink>
                

                <div className='navbar__content--right'>
                    <ReactRouterNavLink to={route('home')}>
                        <NavItem item={'Het toetsweb'} color={'purple'}/>
                    </ReactRouterNavLink>

                    <ReactRouterNavLink to={route('scan')}>
                        <NavItem item={'Toetsweb scan'} color={'orange'}/>
                    </ReactRouterNavLink>

                    <ReactRouterNavLink to={'/result'}>
                        <NavItem item={'Resultaat'} color={'green'}/>
                    </ReactRouterNavLink>
                </div>
            </div>
        </nav>
    );
};
 
export default NavBar;
