import {Element} from './Element';

export interface Entity {
    name: string;
    color: string;
    description: string;
    elements: Element[];
    genericPhaseDescriptions: string[];
    type: Entities;
}

export enum Entities {
    ASSESSMENT_TASKS,
    ASSESSMENT_PROGRAMME,
    ASSESSMENT_POLICY,
    ASSESSMENT_ORGANISATION,
    ASSESSMENT_LITERACY
}