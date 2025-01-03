import Page from '../Page'
import {LocalButtonAnchor} from "../layout/ButtonAnchor";
import ArrowIcon from '../../assets/icons/arrow.svg';
import {useTranslation} from "react-i18next";

const NotFoundPage = () => {
	const {t} = useTranslation();

	return (
		<Page className={'not-found-page'}>
			<h2>{t('pages.notFound.title')}</h2>
			<p>{t('pages.notFound.text')}</p>
			<LocalButtonAnchor to={''}>
				<span>{t('pages.notFound.buttonText')}</span>
				<img src={ArrowIcon} alt="pijl naar rechts"/>
			</LocalButtonAnchor>
		</Page>
	);
}

export default NotFoundPage;
