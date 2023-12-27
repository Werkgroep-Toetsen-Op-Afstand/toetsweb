import {Phase} from "./Phase";

export interface Element {
    name: string;
    phases: Phase[];
    type: Elements;
}

export enum Elements {
    QUALITY_CRITERIA,
    DESIGN,
    QUALITY_ASSURANCE
}