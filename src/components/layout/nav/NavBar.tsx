import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { route } from 'buro-lib-ts';
import NavItem from './NavItem';
import scanData from "../../../assets/data/scandata.json";
import {LanguageContext} from "../../../utils/contexts/LanguageContext";

const NavBar: FunctionComponent = () => {

    const {language, changeLanguage, getTranslation} = useContext(LanguageContext);

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
                        <h1>{getTranslation("nav.title")}</h1>
                    </div>
                </ReactRouterNavLink>
                

                <div className='navbar__content--right'>
                    <ReactRouterNavLink to={route('home')}>
                        <NavItem item={getTranslation("nav.home")} color={'purple'}/>
                    </ReactRouterNavLink>

                    <ReactRouterNavLink to={route('scan')}>
                        <NavItem item={getTranslation("nav.scan")} color={'orange'}/>
                    </ReactRouterNavLink>

                    {answer && 
                    <ReactRouterNavLink to={'/result'}>
                        <NavItem item={getTranslation("nav.result")} color={'green'}/>
                    </ReactRouterNavLink>
                    }
                </div>
            </div>
        </nav>
    );
};
 
export default NavBar;
