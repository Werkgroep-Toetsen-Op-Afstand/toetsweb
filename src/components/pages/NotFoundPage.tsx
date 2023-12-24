import {useContext} from 'react';
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import {LanguageContext} from "../../utils/contexts/LanguageContext";

const NotFoundPage = () => {

    const {getTranslation} = useContext(LanguageContext);

    return (
        <div className={'not-found-page'}>
            <h2>{getTranslation("notfound.title")}</h2>
            <ReactRouterNavLink to={route('home')}>
                <div className='not-found-page__button'>
                    <p>{getTranslation("notfound.buttonText")}</p>
                </div>
            </ReactRouterNavLink>
        </div>
    );
};

export default NotFoundPage;
