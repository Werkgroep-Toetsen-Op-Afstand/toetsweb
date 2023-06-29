import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { route } from 'buro-lib-ts';
import NavItem from './NavItem';
import {LanguageContext} from "../../../utils/contexts/LanguageContext";
import {Language} from "../../../utils/Localization";

const NavBar: FunctionComponent = () => {

    const {language, changeLanguage, getTranslation, getScanData} = useContext(LanguageContext);

    const entities = getScanData().entities;

    const [answer, setAnswer] = useState<any>([]);    

    useEffect(() => {
        entities.forEach((entity, entityIndex) => {
            entity.elements.forEach((element, elementIndex) => {
                setAnswer(window.localStorage.getItem(`${entityIndex}.${elementIndex}`));
            })
        })
    }, [entities])

    const handleChangeLanguage = () => {
        if (language === Language.NL) changeLanguage(Language.EN);
        if (language === Language.EN) changeLanguage(Language.NL);
    }

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

                    <div className="cursor-pointer unselectable" onClick={handleChangeLanguage}>
                        <NavItem item={language === Language.NL ? "🇬🇧" : "🇳🇱"} color={'white'} />
                    </div>
                </div>
            </div>
        </nav>
    );
};
 
export default NavBar;
