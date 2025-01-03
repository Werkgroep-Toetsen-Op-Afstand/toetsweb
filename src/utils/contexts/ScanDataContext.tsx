import {createContext, FunctionComponent, useMemo} from 'react'
import {Entity, EntityArray} from '../../models/Entity'
import {ElementArray, Element} from '../../models/Element'
import {ScanAnswer} from "../../models/ScanAnswer";

interface IScanDataContext {
	getScanAnswer: (entity: Entity, element: Element) => ScanAnswer
	setScanAnswer: (entity: Entity, element: Element, scanAnswer: ScanAnswer) => void,
	entityFilledIn: (entity: Entity) => boolean,
	anyEntityFilledIn: boolean
}

export const ScanDataContext = createContext({} as IScanDataContext);

interface Props {
	children: any
}

// TODO: This context should cache everything, as it reads from local storage a lot
export const ScanDataProvider: FunctionComponent<Props> = ({children}) => {
	const setScanAnswer = (entity: Entity, element: Element, scanAnswer: ScanAnswer) => {
		localStorage.setItem(`${entity}.${element}`, JSON.stringify(scanAnswer));
	}

	const getScanAnswer = (entity: Entity, element: Element): ScanAnswer => {
		const localEntity = localStorage.getItem(`${entity}.${element}`);
		if (!localEntity) {
			return {
				checkedPosition: -1,
				checkedAmbition: -1
			}
		}
		return JSON.parse(localEntity) as ScanAnswer;
	}

	const scanAnswerFilledIn = (entity: Entity, element: Element): boolean => {
		const scanAnswer = getScanAnswer(entity, element);
		if (!scanAnswer) return false;
		return scanAnswer.checkedPosition !== -1 && scanAnswer.checkedAmbition !== -1;
	}

	const entityFilledIn = (entity: Entity) => {
		for (const element of ElementArray) {
			if (!scanAnswerFilledIn(entity, element)) return false;
		}
		return true;
	}

	const anyEntityFilledIn = useMemo(() => {
		for (const entity of EntityArray) {
			if (entityFilledIn(entity)) return true;
		}
		return false;
	}, [setScanAnswer]);

	return (
		<ScanDataContext.Provider value={{getScanAnswer, setScanAnswer, entityFilledIn, anyEntityFilledIn}}>
			{children}
		</ScanDataContext.Provider>
	)
}
