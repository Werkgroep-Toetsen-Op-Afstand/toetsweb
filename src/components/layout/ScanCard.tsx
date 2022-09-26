import React, {FunctionComponent} from 'react';
import TextArea from "./TextArea";
import HorizontalCheckbox from "./HorizontalCheckbox";
import Button from "./Button";

export enum Class {
    blue = '#44A6C2',
    cyan = '#2DB3A5',
    purple = '#B072AD',
    orange = '#ED7A0B',
    green = '#45AD48',
}

interface Props {
    image: string;
    baseClass: string;
}

const ScanCard: FunctionComponent<Props> = ({image, baseClass}) => {

    return (
        <div className={`scancard ${baseClass}__border-top`}>
            <div className='scancard__grid'>
                <div>
                    <div>
                        <h4>Toetstaken</h4>
                        <br/>
                        <h4>Kwaliteitscriteria</h4>
                        <br/>
                        <span className='scancard__grid__span'><h4>Positie</h4><p> - In welke beschrijving herken je jouw opleiding nu het meest?</p></span>
                        <br/>
                        <span className={`scancard__grid__span scancard__grid__span--ambition ${baseClass}__transparent-bg`}>
                    <h4 className='scancard__grid--asterix'>*</h4>
                    <h4>Ambitie</h4>
                    <p> - Welke beschrijving past over 2 jaar het beste bij jouw opleiding?</p>
                    </span>
                    </div>
                    <br/>
                    <form className='scancard__grid__form'>
                        <div className='scancard__grid__form__checkbox'>
                            <div className='hor-check'>
                                <div className='hor-check__container'>
                                    <p className='hor-check__container__label'>Positie</p>
                                </div>
                                <div className={`hor-check__container ${baseClass}__transparent-bg`}>
                                    <p className='hor-check__container__label'>Ambitie</p>
                                </div>
                            </div>
                            <HorizontalCheckbox position={1}
                                                rowText={'Docenten ontwikkelen toetsen naar eigen inzicht: zij gebruiken daarvoor eigen kwaliteitcriteria.'}
                                                baseClass={baseClass}/>
                            <HorizontalCheckbox position={2}
                                                rowText={'Docenten maken bij het ontwerpen van toetsen gebruik van kwaliteitscriteria die zijn gebaseerd op ervaringen van ervaren toetsontwikkelaars.'}
                                                baseClass={baseClass}/>
                            <HorizontalCheckbox position={3}
                                                rowText={'De kwaliteitscriteria die docenten gebruiken bij het ontwikkelen toetsen worden regelmaat bijgesteld op basis van actuele (wetenschappelijke) inzichten.'}
                                                baseClass={baseClass}/>
                            <HorizontalCheckbox position={4}
                                                rowText={'De kwaliteitscriteria die gebruikt worden bij het ontwerpen van zowel de toetsen als de leer- en toetsdoelen zijn afgestemd met het werkveld.'}
                                                baseClass={baseClass}/>
                        </div>
                    </form>
                </div>
                <img className='scancard__grid__illustration' src={image} alt="illustratieve afbeelding"/>
            </div>
            <div className='scancard__textarea-container'>
                <TextArea titleTextArea={'Positie'} hintTextArea={'Licht je antwoord toe.'}/>
                <TextArea titleTextArea={'Ambitie'} hintTextArea={'Licht je antwoord toe.'}/>
            </div>
            <div className='scancard__progress'>
                <div className='scancard__progress__container'>
                    <span className={`scancard__progress__container__dot ${baseClass}__border ${baseClass}__bg`}></span>
                    <span className={`scancard__progress__container__dot ${baseClass}__border`}></span>
                    <span className={`scancard__progress__container__dot ${baseClass}__border`}></span>
                </div>
                <div className='scancard__progress__button-container'>
                    <Button onClick={() => console.log("next clicked")} backgroundColor='#44A6C2' children={
                        <span><p>Volgende vraag</p></span>
                    }></Button>
                </div>
            </div>
        </div>
    )
}

export default ScanCard;