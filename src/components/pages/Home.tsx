import Button from 'components/layout/Button';
import { FunctionComponent } from 'react';
import {Page} from 'react-ts-boiler';
import Card from "../layout/Card"
import Toetstaken from "../../assets/images/IllustratieToetstaken.svg"
import ArrowIcon from "../../assets/icons/arrow.svg"
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { route } from 'react-ts-boiler';
import ToetsmodelComponent from 'components/layout/ToetsmodelComponent';

interface Props {
}

const Home: FunctionComponent<Props> = () => {

    return (
        <Page className={'home-page'}>
            <div className="home-page__hero-section">
                <div>
                    <h1>AAN DE SLAG MET HET TOETSWEB: WERKEN AAN KWALITEIT VAN TOETSING</h1>
                    <br/>
                    <br/>
                    <p>Op deze website kun je met je opleidingsteam, de toets- of curriculumcommissie van je team of een
                        andere relevante vertegenwoordiging van de opleiding de Toetsweb-Scan invullen. De Toetsweb-Scan
                        is gebaseerd op de methodiek van de Toetsing Getoetst en is bedoeld om de kwaliteit van toetsing
                        te analyseren, verbeteren en borgen. Het toetsweb vormt het theoretisch fundament onder de
                        Toetsing Getoetst.</p>
                </div>

                <ToetsmodelComponent/>
            </div>

            <div className='home-page__blur'></div>

            <div className='home-page__info-section'>
                <Card children={
                    <div className='home-page__info-section__inner-card'>
                        <h3>Gezamenlijk toetskwaliteit bepalen</h3>
                        <p>Met behulp van de Toetsweb-scan kun je als team samen vaststellen hoe de (duurzame) kwaliteit
                            van toetsing er op dit moment uitziet in jullie opleiding (positiebepaling). Ook kun je met
                            behulp van deze scan samen keuzes maken over jullie ontwikkeling richting (duurzame)
                            toetskwaliteit (ambitiebepaling). Daarnaast maak je behulp van de scan met je team een
                            onderbouwd actieplan om te komen tot jullie ambitie.</p>
                    </div>
                }/>

                <Card children={
                    <div className='home-page__info-section__inner-card'>
                        <h3>Het toetsweb uitgelegd</h3>
                        <p>Het toetsweb bestaat uit vijf toetsentiteiten; toets(tak)en, toetsprogramma, toetsbeleid,
                            toetsorganisatie en toetsbekwaamheid. Deze vijf entiteiten zijn verbonden met elkaar én met
                            de kern van het web. De vorm van het web symboliseert de verwevenheid van de verschillende
                            toetsentiteiten, maakt visueel zichtbaar dat deze allemaal met elkaar verbonden zijn en laat
                            vier verschillende ontwikkelingsfasen zien.</p>
                    </div>
                }/>
            </div>

            <div className='home-page__extra-info'>
                <div>
                    <p>
                        Binnen iedere toetsentiteit kunnen drie elementen worden onderscheiden. Dit zijn de elementen
                        kwaliteitscriteria, ontwerp en borging. Het eerste element, kwaliteitscriteria, gaat over de
                        vraag welke informatie wordt gebruikt om de kwaliteit van de toetsentiteiten te realiseren en
                        vast te stellen. Het tweede element, ontwerp, is gericht op de vraag hoe de ontwikkeling en
                        inzet van de vijf toetsentiteiten tot stand komt. Het derde element, borging, richt zich op de
                        wijze waarop de kwaliteitsborging van de toetsentiteiten wordt ingericht. Structurele aandacht
                        voor deze drie elementen borgt dat er gewerkt wordt vanuit de PDCA-cyclus.
                    </p>
                    <br/>
                    <p>Opleidingen kunnen zich ontwikkelen op de kwaliteit van toetsing. Er worden vier
                        ontwikkelingsfasen onderscheiden. In het web zijn deze ontwikkelingsfasen gesymboliseerd als
                        vlakjes.</p>
                    <br/>
                    <p>Per toetsentiteit is voor iedere ontwikkelingsfase is een korte omschrijving beschikbaar over hoe
                        de toetsentiteit in die fase wordt ingevuld (20 vlakjes in het web).</p>

                    <br/>
                    <br/>

                    <h3>Starten met de scan</h3>

                    <p>Wil je de Toetsweb-Scan uitvoeren, zorg dan dat je met je team tegelijk aan de slag kunt en
                        ongeveer anderhalf tot 2 uur kunt uittrekken. Uiteraard kun je de scan ook individueel
                        invullen.</p>

                    <br />
                    <br />

                    <ReactRouterNavLink exact={true} to={route('scan')}>
                        <div className='home-page__button'>
                            <span><p>Start de Toetsweb-Scan</p><img src={ArrowIcon} alt="pijl naar rechts"></img></span>
                        </div>
                    </ReactRouterNavLink>
                    
                </div>
                <img src={Toetstaken} alt="Illustratie Toets(tak)en"/>
            </div>
        </Page>
    );
};

export default Home;
