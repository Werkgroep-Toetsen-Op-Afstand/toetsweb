import nl, {
    nlElements,
    nlEntities,
    nlEntityElementPhaseDescriptions,
    nlGenericEntityDescriptions,
    nlGenericEntityPhaseDescriptions,
    nlGenericPhaseDescriptions,
    nlPhases
} from "../config/lang/nl";
import en, {
    enElements,
    enEntities,
    enEntityElementPhaseDescriptions,
    enGenericEntityDescriptions,
    enGenericEntityPhaseDescriptions,
    enGenericPhaseDescriptions,
    enPhases
} from "../config/lang/en";

export enum Language {
    EN = 'en',
    NL = 'nl'
}

const languageSwitch = (language: Language, en: any, nl: any) => {
    switch (language) {
        case Language.EN:
            return en;
        case Language.NL:
            return nl;
        default:
            return nl;
    }
}

export const getLocaleTranslation = (language: Language, key: string): string => {
    return languageSwitch(language, en[key], nl[key]) as string;
}

export interface Localization {
    [key: string]: string;
}

export const getEntities = (language: Language): string[] => {
    return languageSwitch(language, enEntities, nlEntities);
}

export const getElements = (language: Language): string[] => {
    return languageSwitch(language, enElements, nlElements);
}

export const getPhases = (language: Language): string[] => {
    return languageSwitch(language, enPhases, nlPhases);
}

export const getEntityElementPhaseDescriptions = (language: Language): string[][][] => {
    return languageSwitch(language, enEntityElementPhaseDescriptions, nlEntityElementPhaseDescriptions);
}

export const getGenericEntityPhaseDescriptions = (language: Language): string[][] => {
    return languageSwitch(language, enGenericEntityPhaseDescriptions, nlGenericEntityPhaseDescriptions);
}

export const getGenericPhaseDescriptions = (language: Language): string[] => {
    return languageSwitch(language, enGenericPhaseDescriptions, nlGenericPhaseDescriptions);
}

export const getGenericEntityDescriptions = (language: Language): string[] => {
    return languageSwitch(language, enGenericEntityDescriptions, nlGenericEntityDescriptions);
}

export interface ScanData {
    entities: ({
        elements: ({ name: string; phases: string[] })[];
        name: string
    })[];
}