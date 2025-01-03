import Toetstaken from '../../assets/images/IllustratieToetstaken.svg'
import ArrowIcon from '../../assets/icons/arrow.svg'
import Colophon from '../layout/footer/Colophon'
import AssignmentModel from '../layout/toetsmodel/AssignmentModel'
import {useTitle} from '../../utils/hooks/TitleHook'
import Page from '../Page'
import {useTranslation} from "react-i18next";
import TranslatedSection from "../layout/TranslatedSection";
import {LocalButtonAnchor} from "../layout/ButtonAnchor";

const Home = () => {
	const {t} = useTranslation();
	useTitle(t('pages.home.title'))

	return (
		<Page>
			<main className={'home-page'}>
				<div className="home-page__hero-section">
					<div>
						<h1>{t('pages.home.header.title')}</h1>
						<p className={'home-page__hero-section__subtitle'}>
							{t('pages.home.header.subTitle')}
						</p>
					</div>
					<div className={'home-page__hero-section__toetsmodel'}>
						<AssignmentModel/>
						<p className={'home-page__model-explanation'}>
							{t('pages.home.modelSubText')}
						</p>
					</div>
				</div>

				<div className="home-page__blur"></div>

				<div className="home-page__info-section">
					<TranslatedSection className={'card'} translationKey={'pages.home.assessmentQuality'}/>
					<TranslatedSection className={'card'} translationKey={'pages.home.assessmentExplained'}/>
				</div>

				<TranslatedSection translationKey={'pages.home.entities'}/>

				<div className="home-page__extra-info">
					<div className="home-page__extra-info__text">
						<TranslatedSection translationKey={'pages.home.elements'}/>
						<TranslatedSection translationKey={'pages.home.phases'}>
							<p className={'m-top-1'}>
								{t('pages.home.explanation.readMore')}<a className={'a'}
																		 href={'https://www.han.nl/artikelen/2021/03/het-toetsweb-duurzame-kwaliteit-van-toetsing/'}>
								{t('pages.home.explanation.link')}
							</a>
							</p>
						</TranslatedSection>
					</div>
					<img src={Toetstaken} alt="Illustratie Toets(tak)en"/>
				</div>

				<TranslatedSection translationKey={'pages.home.startScan'}>
					<LocalButtonAnchor to={'scan'} variant={'primary'}>
						<span>{t('pages.home.startScan.link')}</span>
						<img src={ArrowIcon} alt="pijl naar rechts"/>
					</LocalButtonAnchor>
				</TranslatedSection>

				<TranslatedSection className={'mt-5'} translationKey={'pages.home.customWeb'}>
					<LocalButtonAnchor to={'custom-web'} variant={'primary'}>
						<span>{t('pages.home.customWeb.link')}</span>
						<img src={ArrowIcon} alt="pijl naar rechts"/>
					</LocalButtonAnchor>
				</TranslatedSection>

				<TranslatedSection className={'developers'} translationKey={'pages.home.developers'}/>
			</main>
			<Colophon/>
		</Page>
	)
}

export default Home
