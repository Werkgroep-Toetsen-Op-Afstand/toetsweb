import React, { FunctionComponent, useEffect, useState } from 'react';
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { route } from 'buro-lib-ts';
import NavItem from './NavItem';
import scanData from "../../../assets/data/scandata.json";

const NavBar: FunctionComponent = () => {

    const entities = scanData.entities;

    const [answer, setAnswer] = useState<any>([]);    

    useEffect(() => {
        entities.forEach((entity, entityIndex) => {
            entity.elements.forEach((element, elementIndex) => {
                setAnswer(window.localStorage.getItem(`${entityIndex}.${elementIndex}`));
            })
        })
    }, [entities])
    

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
                        <NavItem item={'Het Toetsweb'} color={'purple'}/>
                    </ReactRouterNavLink>

                    <ReactRouterNavLink to={route('scan')}>
                        <NavItem item={'Toetsweb-Scan'} color={'orange'}/>
                    </ReactRouterNavLink>

                    {answer && 
                    <ReactRouterNavLink to={'/result'}>
                        <NavItem item={'Resultaat'} color={'green'}/>
                    </ReactRouterNavLink>
                    }
                </div>
            </div>
        </nav>
    );
};
 
export default NavBar;
