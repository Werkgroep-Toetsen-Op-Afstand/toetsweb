import {FunctionComponent} from 'react'
import {Phase} from '../../../../models/Phase'
import {Portal} from '../../Portal'
import {useTranslation} from "react-i18next";

interface Props {
	d: string
	phase: Phase
	bb: [x: number, y: number]
}

const ModelPhases: FunctionComponent<Props> = (props) => {
	const {t} = useTranslation();

	const currentName = t(`phases.${props.phase}.name`);
	const currentDescription = t(`phases.${props.phase}.description`);

	return (
		<Portal
			trigger={
				<g id="bb">
					<rect
						fillOpacity={0}
						x={props.bb[0]}
						y={props.bb[1]}
						width={20}
						height={20}
						rx={10}
						ry={10}
					/>
					<path fill={'#000000'} d={props.d}/>
				</g>
			}
		>
			<div className="toetsmodel-component__popup">
				<h4>{`${props.phase + 1}. ${currentName}`}</h4>
				<p>{currentDescription}</p>
			</div>
		</Portal>
	)
}

export default ModelPhases
