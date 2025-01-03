import {FunctionComponent} from "react";
import Button from "../Button";
import ArrowIcon from "../../../assets/icons/arrow.svg";
import {useTranslation} from "react-i18next";

interface Props {
	handleNext: () => void
}

const ScanIntroduction: FunctionComponent<Props> = (props) => {
	const {t} = useTranslation();

	return (
		<div className={'scancard scan-introduction'}>
			<h1>{t('pages.scan.introduction.title')}</h1>
			<section>
				<h2>{t('pages.scan.introduction.preparation.title')}</h2>
				<p>{t('pages.scan.introduction.preparation.text')}</p>
			</section>

			<section>
				<h2>{t('pages.scan.introduction.individual.title')}</h2>
				<ul>
					{(t('pages.scan.introduction.individual.text', {returnObjects: true}) as string[]).map(text => (
						<li key={text}>{text}</li>
					))}
				</ul>
			</section>

			<section>
				<h2>{t('pages.scan.introduction.team.title')}</h2>
				<p>{t('pages.scan.introduction.team.text')}</p>
			</section>

			<Button onClick={props.handleNext}>
				<span>{t('pages.home.startScan.link')}</span>
				<img src={ArrowIcon} alt="pijl naar rechts"/>
			</Button>
		</div>
	)
}

export default ScanIntroduction;
