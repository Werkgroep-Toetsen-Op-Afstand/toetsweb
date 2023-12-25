import {FunctionComponent} from "react";
import {GenericPhase} from "../../../../models/Phase";
import {Portal} from "../../Portal";

interface Props {
    d: string;
    phase: GenericPhase;
    bb: [x: number, y: number];
}

const ModelPhases: FunctionComponent<Props> = ({phase, bb, d}) => {

    const phaseIndex = phase.type.valueOf();

    return (
        <Portal trigger={
            <g id="bb">
                <rect fillOpacity={0} x={bb[0]} y={bb[1]} width={20} height={20} rx={10} ry={10}/>
                <path fill={'#000000'} d={d}/>
            </g>
        }>
            <div className='toetsmodel-component__popup'>
                <h4>{`${phaseIndex + 1}. ${phase.name}`}</h4>
                <p>{phase.description}</p>
            </div>
        </Portal>
    );
}

export default ModelPhases;