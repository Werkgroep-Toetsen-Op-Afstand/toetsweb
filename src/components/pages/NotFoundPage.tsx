import React, {FunctionComponent, useContext} from 'react';
import {Page, route} from 'buro-lib-ts';
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import {LanguageContext} from "../../utils/contexts/LanguageContext";
import ToetsmodelComponentOud from "../layout/ToetsmodelComponentOud";

const NotFoundPage = () => {

    const {getTranslation} = useContext(LanguageContext);

    return (
        <Page className={'not-found-page'}>
            <h2>{getTranslation("notfound.title")}</h2>
            <ToetsmodelComponentOud/>
            <ReactRouterNavLink to={route('home')}>
                <div className='not-found-page__button'>
                    <p>{getTranslation("notfound.buttonText")}</p>
                </div>
            </ReactRouterNavLink>
        </Page>
    );
};

export default NotFoundPage;
