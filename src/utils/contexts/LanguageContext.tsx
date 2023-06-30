import {useEffect, useState, createContext, FunctionComponent} from "react";
import {Language, getLocaleTranslation, ScanData, getLocaleScanData} from "../Localization";

export const LanguageContext = createContext({
    language: 'en',
    changeLanguage: (newLanguage: Language) => {},
    getTranslation: (key: string) => key,
    getScanData: (): ScanData => {return {} as ScanData}
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

    const getScanData = (): ScanData => {
        return getLocaleScanData(language);
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage, getTranslation, getScanData}}>
            {children}
        </LanguageContext.Provider>
    )
}