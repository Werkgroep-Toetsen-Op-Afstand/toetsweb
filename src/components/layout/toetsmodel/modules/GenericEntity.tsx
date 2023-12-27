import {FunctionComponent} from "react";
import {Phase} from "../../../../models/Phase";
import {Portal} from "../../Portal";

interface PhaseBarProps {
    phase: Phase;
    result: number;
    d: string;
}

const GenericEntity: FunctionComponent<PhaseBarProps> = ({phase, result, d}) => {


    const phaseIndex = phase.type.valueOf();
    const isResult = (phaseIndex === (result - 1) || result === -1);

    const style = () => {
        const color = isResult ? phase.color : phase.fallbackColor;
        return {
            backgroundColor: color,
            fill: color
        }
    }

    return (
        <Portal trigger={
            <path style={style()} d={d}/>
        }>
            <div className={"toetsmodel-component__popup"} style={{backgroundColor: phase.color}}>
                <h4>{`${phaseIndex + 1}. ${phase.name.toUpperCase()}`}</h4>
                <p>{phase.genericEntityDescription}</p>
            </div>
        </Portal>
    );
}

export default GenericEntity;