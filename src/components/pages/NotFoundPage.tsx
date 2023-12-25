import {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {LanguageContext} from "../../utils/contexts/LanguageContext";
import Page from "../Page";

const NotFoundPage = () => {

    const {getTranslation} = useContext(LanguageContext);

    return (
        <Page className={'not-found-page'}>
            <h2>{getTranslation("notfound.title")}</h2>
            <NavLink to={"/home"}>
                <div className='not-found-page__button'>
                    <p>{getTranslation("notfound.buttonText")}</p>
                </div>
            </NavLink>
        </Page>
    );
};

export default NotFoundPage;
