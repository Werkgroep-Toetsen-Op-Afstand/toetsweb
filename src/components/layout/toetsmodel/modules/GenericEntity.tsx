import {FunctionComponent, useContext} from "react";
import {Phase} from "./GenericPhase";
import AssignmentModelPopup from "./AssignmentModelPopup";
import {LanguageContext} from "../../../../utils/contexts/LanguageContext";

export enum Entity {
    AssessmentTasks = 'assessmenttasks',
    AssessmentProgram = 'assessmentprogram',
    AssessmentPolicy = 'assessmentpolicy',
    AssessmentOrganisation = 'assessmentorganisation',
    AssessmentLiteracy = 'assessmentliteracy',
}

interface PhaseBarProps {
    entity: Entity;
    phase: Phase;
    result: number;
    d: string;
}

const GenericEntity: FunctionComponent<PhaseBarProps> = ({entity, phase, result, d}) => {
    const {getTranslation} = useContext(LanguageContext);

    const phases = [Phase.ActivityOriented, Phase.ProcessOriented, Phase.SystemOriented, Phase.ChainOriented];

    const phaseIndex = phases.indexOf(phase);
    const colorClass = (phaseIndex === (result - 1) || result === -1) ?
        `${entity}-${phase}` :
        `grey-${phase}`;

    return (
        <AssignmentModelPopup trigger={
            <path className={colorClass} d={d}/>
        }>
            <div className={`toetsmodel-component__element-hover ${entity}-${phase}`}>
                <h4>{getTranslation(`phase.${phase}.title`).toUpperCase()}</h4>
                <p>{getTranslation(`${entity}.${phase}.description`)}</p>
            </div>
        </AssignmentModelPopup>
    );
}

export default GenericEntity;