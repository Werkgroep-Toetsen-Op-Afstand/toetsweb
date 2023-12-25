import {createContext, FunctionComponent, useContext, useMemo} from "react";
import {LanguageContext} from "./LanguageContext";
import {Entities, Entity} from "../../models/Entity";
import {Element, Elements} from "../../models/Element";
import {GenericPhase, genericPhaseColors, Phase, Phases} from "../../models/Phase";
import {
    getElements,
    getEntities,
    getEntityElementPhaseDescriptions,
    getGenericEntityDescriptions, getGenericEntityPhaseDescriptions, getGenericPhaseDescriptions,
    getPhases,
    Language
} from "../Localization";

export const ScanDataContext = createContext({
    scanData: [] as Entity[],
    genericPhases: [] as GenericPhase[]
});

interface Props {
    children: any;
}

export const ScanDataProvider: FunctionComponent<Props> = ({children}) => {
    const {language} = useContext(LanguageContext);

    const scanData: Entity[] = useMemo(() => {
        const descriptions = getGenericEntityDescriptions(language);
        const entities = [Entities.ASSESSMENT_TASKS, Entities.ASSESSMENT_PROGRAMME, Entities.ASSESSMENT_POLICY, Entities.ASSESSMENT_ORGANISATION, Entities.ASSESSMENT_LITERACY];
        const genericPhaseDescriptions = getGenericEntityPhaseDescriptions(language);

        return getEntities(language).map((entity: string, entityIndex): Entity => ({
            name: entity,
            color: phaseColors[entityIndex][phaseColors[entityIndex].length - 1],
            description: descriptions[entityIndex],
            elements: getElementsFrom(language, entityIndex),
            genericPhaseDescriptions: genericPhaseDescriptions[entityIndex],
            type: entities[entityIndex]
        }));
    }, [language]);

    const genericPhases: GenericPhase[] = useMemo(() => {
        const descriptions = getGenericPhaseDescriptions(language);

        return getPhases(language).map((phase: string, phaseIndex): GenericPhase => ({
            name: phase,
            description: descriptions[phaseIndex],
            type: phaseIndex
        }));
    }, [language]);

    return (
        <ScanDataContext.Provider value={{scanData, genericPhases}}>
            {children}
        </ScanDataContext.Provider>
    )
}

const getElementsFrom = (language: Language, entity: number): Element[] => {

    const elements = [Elements.QUALITY_CRITERIA, Elements.DESIGN, Elements.QUALITY_ASSURANCE];

    return getElements(language).map((element: string, elementIndex): Element => ({
        name: element,
        phases: getPhasesFrom(language, entity, elementIndex),
        type: elements[elementIndex]
    }));
}

const getPhasesFrom = (language: Language, entity: number, element: number): Phase[] => {

    const descriptions = getEntityElementPhaseDescriptions(language);
    const genericEntityDescriptions = getGenericEntityPhaseDescriptions(language);
    const phases = [Phases.ACTIVITY_ORIENTED, Phases.PROCESS_ORIENTED, Phases.SYSTEM_ORIENTED, Phases.CHAIN_ORIENTED];

    return getPhases(language).map((phase: string, phaseIndex): Phase => ({
        name: phase,
        description: descriptions[entity][element][phaseIndex],
        genericEntityDescription: genericEntityDescriptions[entity][phaseIndex],
        color: phaseColors[entity][phaseIndex],
        fallbackColor: genericPhaseColors[phaseIndex],
        type: phases[phaseIndex]
    }));
}

const phaseColors: string[][] = [
    [
        "#A1D3E1",
        "#85C5D7",
        "#73BDD2",
        "#45A7C3"
    ],
    [
        "#95D8D1",
        "#76CDC4",
        "#61C6BB",
        "#2DB3A5",
    ],
    [
        "#D6B7D5",
        "#CAA3C9",
        "#C395C1",
        "#AF72AD",
    ],
    [
        "#F5BB86",
        "#F3A862",
        "#F19B4B",
        "#ED7A0F",
    ],
    [
        "#A1D5A2",
        "#86C987",
        "#74C175",
        "#46AD48",
    ]
];