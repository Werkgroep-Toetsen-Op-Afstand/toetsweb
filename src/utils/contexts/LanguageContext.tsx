import {useEffect, useState, createContext, FunctionComponent} from "react";
import {Language, getLocaleTranslation} from "../Localization";

export const LanguageContext = createContext({
    language: Language.NL,
    changeLanguage: (newLanguage: Language) => {},
    getTranslation: (key: string) => key,
});

interface Props {
    children: any;
}

export const LanguageProvider: FunctionComponent<Props> = ({children}) => {
    const [language, setLanguage] = useState<Language>(Language.NL);

    useEffect(() => {
        const localLanguage = window.localStorage.getItem('language');
        if (localLanguage) {
            setLanguage(localLanguage as Language);
            return;
        }
        const browserLanguage = navigator.language.split('-')[0];
        setLanguage(browserLanguage as Language);
    }, []);

    const changeLanguage = (newLanguage: Language): void => {
        setLanguage(newLanguage);
        document.documentElement.lang = newLanguage;
        window.localStorage.setItem('language', newLanguage);
    }

    const getTranslation = (key: string): string => {
        return getLocaleTranslation(language, key);
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage, getTranslation}}>
            {children}
        </LanguageContext.Provider>
    )
}