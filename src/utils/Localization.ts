import nl, {nlScanData} from "../config/lang/nl";
import en, {enScanData} from "../config/lang/en";

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

export const getLocaleScanData = (language: Language): ScanData => {
    switch (language) {
        case Language.EN:
            return enScanData;
        case Language.NL:
            return nlScanData;
        default:
            return nlScanData;
    }
}

export interface Localization {
    [key: string]: string;
}

export interface ScanData {
    entities: ({
        elements: ({ name: string; phases: string[] })[];
        name: string
    })[];
}