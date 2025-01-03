import ScanCard from '../layout/scan/ScanCard'
import {useContext, useState} from 'react'
import {useTitle} from '../../utils/hooks/TitleHook'
import Page from '../Page'
import {ScanDataContext} from '../../utils/contexts/ScanDataContext'
import {Entity, EntityArray, entityColors} from "../../models/Entity";
import {Element} from "../../models/Element";
import {useTranslation} from "react-i18next";
import {phaseColors} from "../../models/Phase";
import ScanIntroduction from "../layout/scan/ScanIntroduction";

const Scan = () => {
	const {entityFilledIn, anyEntityFilledIn} = useContext(ScanDataContext);

	const {t} = useTranslation();

	const [currentEntity, setCurrentEntity] = useState<Entity>(Entity.ASSESSMENT_TASKS);
	const [currentElement, setCurrentElement] = useState<Element>(Element.QUALITY_CRITERIA);
	const [showIntroduction, setShowIntroduction] = useState<boolean>(!anyEntityFilledIn);

	useTitle(t('pages.scan.title'));

	const goToEntity = (entity: Entity) => {
		setShowIntroduction(false);
		setCurrentEntity(entity);
		setCurrentElement(Element.QUALITY_CRITERIA);
	}

	const handleNext = () => {
		if (currentElement === Element.QUALITY_ASSURANCE) {
			if (currentEntity === Entity.ASSESSMENT_LITERACY) {
				window.location.href = '/result'
				return
			}
			setCurrentElement(Element.QUALITY_CRITERIA)
			setCurrentEntity(currentEntity + 1)
			window.scrollTo(0, 0)
			return
		}
		setCurrentElement(currentElement + 1)
		window.scrollTo(0, 0)
	}

	const handlePrevious = () => {
		if (currentElement === Element.QUALITY_CRITERIA) {
			if (currentEntity === Entity.ASSESSMENT_TASKS) {
				setShowIntroduction(true);
				return;
			}
			setCurrentElement(Element.QUALITY_ASSURANCE)
			setCurrentEntity(currentEntity - 1)
			window.scrollTo(0, 0)
			return
		}
		setCurrentElement(currentElement - 1)
		window.scrollTo(0, 0)
	}

	return (
		<Page className="scan">
			<div className={'scan__tabs'}>
				{EntityArray.map((entity) => {
					const notFinished = !entityFilledIn(entity);
					const color = notFinished ? 'gray' : 'white';

					const backgroundColor = () => {
						if (notFinished) return '#F9F9F9';
						if (currentEntity === entity) return entityColors[currentEntity];
						return phaseColors[entity][0];
					}

					return (
						<button
							key={entity}
							className={`scan__tabs-item nobutton`}
							style={{backgroundColor: backgroundColor(), color: color}}
							onClick={() => goToEntity(entity)}>
							<p>{t(`entities.${entity}.name`)}</p>
						</button>
					)
				})}
			</div>

			{
				showIntroduction
					? <ScanIntroduction handleNext={() => setShowIntroduction(false)}/>
					: <ScanCard
						color={entityColors[currentEntity]}
						entityIndex={currentEntity}
						elementIndex={currentElement}
						handleNext={handleNext}
						handlePrevious={handlePrevious}/>
			}


		</Page>
	)
}

export default Scan
