import {FunctionComponent, useContext} from "react";
import AssignmentModelPopup from "./AssignmentModelPopup";
import {LanguageContext} from "../../../../utils/contexts/LanguageContext";

export enum Phase {
    ActivityOriented = 'activityoriented',
    ProcessOriented = 'processoriented',
    SystemOriented = 'systemoriented',
    ChainOriented = 'chainoriented'
}

interface Props {
    d: string;
    phase: Phase;
    bb: [x: number, y: number];
}

const GenericPhase: FunctionComponent<Props> = ({phase, bb, d}) => {
    const {getTranslation} = useContext(LanguageContext);

    return (
        <AssignmentModelPopup trigger={
            <g id="bb">
                <rect fillOpacity={0} x={bb[0]} y={bb[1]} width={20} height={20} rx={10} ry={10}/>
                <path fill={'#000000'} d={d}/>
            </g>
        }>
            <div className='toetsmodel-component__one-hover'>
                <h4>{getTranslation(`phase.${phase}.title`)}</h4>
                <p>{getTranslation(`phase.${phase}.description`)}</p>
            </div>
        </AssignmentModelPopup>
    );
}

export default GenericPhase;