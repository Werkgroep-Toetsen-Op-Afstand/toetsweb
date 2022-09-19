import React, {FunctionComponent} from 'react';
import ToetstakenIllu from "../../assets/images/IllustratieToetstaken.svg"
import TextArea from "./TextArea";
import HorizontalCheckbox from "./HorizontalCheckbox";
import Button from "./Button";

interface Props {
}

const ScanCard: FunctionComponent<Props> = () => {

    return (
        <div className='scancard'>
            <div className='scancard__grid'>
                <div>
                    <div>
                        <h4>Toetstaken</h4>
                        <br/>
                        <h4>Kwaliteitscriteria</h4>
                        <br/>
                        <span className='scancard__grid__span'><h4>Positie</h4><p> - In welke beschrijving herken je jouw opleiding nu het meest?</p></span>
                        <br/>
                        <span className='scancard__grid__span scancard__grid__span--ambition'>
                    <h4 className='scancard__grid--asterix'>*</h4>
                    <h4>Ambitie</h4>
                    <p> - Welke beschrijving past over 2 jaar het beste bij jouw opleiding?</p>
                    </span>
                    </div>
                    <br/>
                    <form className='scancard__grid__form'>
                        <div className='scancard__grid__form__checkbox'>
                            <HorizontalCheckbox position={0} rowText={''}/>
                            <HorizontalCheckbox position={1}
                                                rowText={'Docenten ontwikkelen toetsen naar eigen inzicht: zij gebruiken daarvoor eigen kwaliteitcriteria.'}/>
                            <HorizontalCheckbox position={2}
                                                rowText={'Docenten maken bij het ontwerpen van toetsen gebruik van kwaliteitscriteria die zijn gebaseerd op ervaringen van ervaren toetsontwikkelaars.'}/>
                            <HorizontalCheckbox position={3}
                                                rowText={'De kwaliteitscriteria die docenten gebruiken bij het ontwikkelen toetsen worden regelmaat bijgesteld op basis van actuele (wetenschappelijke) inzichten.'}/>
                            <HorizontalCheckbox position={4}
                                                rowText={'De kwaliteitscriteria die gebruikt worden bij het ontwerpen van zowel de toetsen als de leer- en toetsdoelen zijn afgestemd met het werkveld.'}/>
                        </div>
                    </form>
                </div>
                <img className='scancard__grid__illustration' src={ToetstakenIllu} alt="illustratieve afbeelding"/>
            </div>
            <div className='scancard__textarea-container'>
                <TextArea titleTextArea={'Positie'} hintTextArea={'Licht je antwoord toe.'}/>
                <TextArea titleTextArea={'Ambitie'} hintTextArea={'Licht je antwoord toe.'}/>
            </div>
            <div className='scancard__progress'>
                <div className='scancard__progress__container'>
                    <span className="scancard__progress__container__dot scancard__progress__container__active"></span>
                    <span className="scancard__progress__container__dot"></span>
                    <span className="scancard__progress__container__dot"></span>
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