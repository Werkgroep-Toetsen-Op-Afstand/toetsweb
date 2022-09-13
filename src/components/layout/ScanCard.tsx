import React, {FunctionComponent} from 'react';
import ToetstakenIllu from "../../assets/images/IllustratieToetstaken.svg"
import VerticalCheckbox from './VerticalCheckbox';
import TextArea from "./TextArea";
import HorizontalCheckbox from "./HorizontalCheckbox";

interface Props {
}

const ScanCard: FunctionComponent<Props> = () => {

    return (
        <div className='scancard'>
            <div>
                <div>
                    <h4>Toetstaken</h4>
                    <br/>
                    <h4>Kwaliteitscriteria</h4>
                    <br/>
                    <span className='scancard__span'><h4>Positie</h4><p> - In welke beschrijving herken je jouw opleiding nu het meest?</p></span>
                    <br/>
                    <span className='scancard__span scancard__span--ambition'>
                    <h4 className='scancard--asterix'>*</h4>
                    <h4>Ambitie</h4>
                    <p> - Welke beschrijving past over 2 jaar het beste bij jouw opleiding?</p>
                    </span>
                </div>
                <br/>
                <form className='scancard__form'>
                    <p>Positie - Ambitie</p>
                    <div className='scancard__form__checkbox'>
                        <HorizontalCheckbox position={1} rowText={'Docenten ontwikkelen toetsen naar eigen inzicht: zij gebruiken daarvoor eigen kwaliteitcriteria.'}/>
                        <HorizontalCheckbox position={2} rowText={'Docenten maken bij het ontwerpen van toetsen gebruik van kwaliteitscriteria die zijn gebaseerd op ervaringen van ervaren toetsontwikkelaars.'}/>
                        <HorizontalCheckbox position={3} rowText={'De kwaliteitscriteria die docenten gebruiken bij het ontwikkelen toetsen worden regelmaat bijgesteld op basis van actuele (wetenschappelijke) inzichten.'}/>
                        <HorizontalCheckbox position={4} rowText={'De kwaliteitscriteria die gebruikt worden bij het ontwerpen van zowel de toetsen als de leer- en toetsdoelen zijn afgestemd met het werkveld.'}/>
                    </div>
                    <div className='scancard__form__textarea'>
                        <TextArea titleTextArea={'Positie'} hintTextArea={'Licht je antwoord toe.'}/>
                        <TextArea titleTextArea={'Ambitie'} hintTextArea={'Licht je antwoord toe.'}/>
                    </div>
                </form>
            </div>
            <img className='scancard__illustration' src={ToetstakenIllu} alt="illustratieve afbeelding"/>
        </div>
    )
}

export default ScanCard;