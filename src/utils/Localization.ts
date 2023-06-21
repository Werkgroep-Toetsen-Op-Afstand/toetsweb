import en from "../config/lang/en";
import nl from "../config/lang/nl";

export enum Language {
    EN = 'en',
    NL = 'nl'
}

export const getLocaleTranslation = (language: Language, key: string): string => {
    switch (language) {
        case Language.EN:
            return en[key];
        case Language.NL:
            return nl[key];
        default:
            return nl[key];
    }
}

export interface Localization {
    [key: string]: string;
}