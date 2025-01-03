import {FunctionComponent} from 'react'
import {Portal} from '../../Portal'
import {Entity} from "../../../../models/Entity";
import {genericPhaseColors, Phase, phaseColors} from "../../../../models/Phase";
import {useTranslation} from "react-i18next";

interface PhaseBarProps {
	entity: Entity
	phase: Phase
	result: number
	d: string
	onPhaseClick?: (entity: Entity, phase: Phase) => void
}

const GenericEntity: FunctionComponent<PhaseBarProps> = (props) => {
	const { t } = useTranslation();

	const isResult = props.phase <= props.result;
	const currentName = t(`phases.${props.phase}.name`);
	const currentDescription = t(`entities.${props.entity}.phases.${props.phase}.description`);
	const currentColor = isResult ? phaseColors[props.entity][props.phase] : genericPhaseColors[props.phase];

	const onClick = () => props.onPhaseClick && props.onPhaseClick(props.entity, props.phase);

	return (
		<Portal trigger={<path style={{backgroundColor: currentColor, fill: currentColor}} d={props.d}/>}
				onClick={onClick}>
			<div className={'toetsmodel-component__popup'}
				 style={{backgroundColor: phaseColors[props.entity][props.phase]}}>
				<h4>{`${props.phase + 1}. ${currentName.toUpperCase()}`}</h4>
				<p>{currentDescription}</p>
			</div>
		</Portal>
	)
}

export default GenericEntity
