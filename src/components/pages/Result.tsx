import {useContext, useMemo} from 'react'
import {useTitle} from '../../utils/hooks/TitleHook'
import Page from '../Page'
import Card from '../layout/Card'
import AssignmentModel from '../layout/toetsmodel/AssignmentModel'
import {EntityArray, entityColors} from "../../models/Entity";
import Button from "../layout/Button";
import {usePDF} from "@react-pdf/renderer";
import ResultsDocument from "../documents/ResultsDocument";
import AdviceDocument from "../documents/AdviceDocument";
import {getResultFromAnswer} from "../../utils/ScanUtils";
import {ExternalButtonAnchor} from "../layout/ButtonAnchor";
import {useTranslation} from "react-i18next";
import {ElementArray} from "../../models/Element";
import {ScanDataContext} from "../../utils/contexts/ScanDataContext";

const Result = () => {
	const {t} = useTranslation();
	const [resultsInstance, _updateResultsInstance] = usePDF({document: <ResultsDocument/>});
	const [adviceInstance, _updateAdviceInstance] = usePDF({document: <AdviceDocument/>});
	const {anyEntityFilledIn, entityFilledIn, getScanAnswer} = useContext(ScanDataContext);

	useTitle(`${t('title')} - ${t('pages.result.title')}`);

	useMemo(() => {
		if (!anyEntityFilledIn) window.location.href = '/scan';
	}, [anyEntityFilledIn]);

	const resetScan = () => {
		window.localStorage.clear();
		window.location.href = '/scan';
	}

	const getResultData = (answerType: 'checkedPosition' | 'checkedAmbition') => {
		return EntityArray.map(entity => getResultFromAnswer(entity, answerType));
	}

	return (
		<Page className="result">
			<header className={'section'}>
				{(t('pages.result.explanation', {returnObjects: true}) as string[]).map(text => (
					<p key={text}>{text}</p>
				))}
			</header>

			<main>
				<div className={'result__container result__subtitle'}>
					<h1 className={'result__container--item'}>
						{t('pages.scan.position.name')}
					</h1>
					<h1 className={'result__container--item'}>
						{t('pages.scan.ambition.name')}
					</h1>
				</div>

				<div className={'result__container'}>
					<div className={'result__container--item'}>
						<AssignmentModel results={getResultData("checkedPosition")}/>
					</div>
					<div className={'result__container--item'}>
						<AssignmentModel results={getResultData("checkedAmbition")}/>
					</div>
				</div>

				<p className={'result__model-explanation'}>
					{t('pages.home.modelSubText')}
				</p>

				{EntityArray.map(entity => {
					if (!entityFilledIn(entity)) return null;

					const positionPhase = getResultFromAnswer(entity, 'checkedPosition');
					const ambitionPhase = getResultFromAnswer(entity, 'checkedAmbition');

					return (
						<div key={entity} className={'result__container'}>
							<Card className={'result__container--item'}>
								<h3 style={{color: entityColors[entity]}}>{t(`entities.${entity}.name`)}</h3>
								<p>{t(`entities.${entity}.phases.${positionPhase}.result.position`)}</p>

								{ElementArray.map(element => {
									const answer = getScanAnswer(entity, element);

									return (
										<div key={element} className={'mt-1'}>
											<h2 style={{color: entityColors[entity]}}>{t(`elements.${element}.name`)}</h2>
											<p>{t(`entities.${entity}.elements.${element}.phases.${answer.checkedPosition}.description`)}</p>
											<p>
												{t('pages.result.comment.position')}:{' '}
												<i>
													{answer.commentPosition || t('pages.result.notFilledIn')}
												</i>
											</p>
										</div>
									)
								})}
							</Card>
							<Card className={'result__container--item'}>
								<h3 style={{color: entityColors[entity]}}>{t(`entities.${entity}.name`)}</h3>
								<p>{t(`entities.${entity}.phases.${ambitionPhase}.result.ambition`)}</p>

								{ElementArray.map(element => {
									const answer = getScanAnswer(entity, element);

									return (
										<div key={element} className={'mt-1'}>
											<h2 style={{color: entityColors[entity]}}>{t(`elements.${element}.name`)}</h2>
											<p>{t(`entities.${entity}.elements.${element}.phases.${answer.checkedAmbition}.description`)}</p>
											<p>
												{t('pages.result.comment.ambition')}:{' '}
												<i>
													{answer.commentAmbition || t('pages.result.notFilledIn')}
												</i>
											</p>
											<br/>
										</div>
									)
								})}
							</Card>
						</div>
					)
				})}
			</main>

			<footer className="result__download-container">
				<ExternalButtonAnchor href={resultsInstance.url ?? undefined} download={"results.pdf"}>
					{t('pages.result.download.results')}
				</ExternalButtonAnchor>

				<ExternalButtonAnchor href={adviceInstance.url ?? undefined} download={"advice.pdf"}>
					{t('pages.result.download.advice')}
				</ExternalButtonAnchor>

				<Button onClick={resetScan} variant={"primary"}>
					{t('pages.result.reset')}
				</Button>
			</footer>
		</Page>
	)
}

export default Result;
