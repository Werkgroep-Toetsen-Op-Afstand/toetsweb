import React, { FunctionComponent } from 'react';
import ToetstakenIllu from "../../assets/images/IllustratieToetstaken.svg"

interface Props {}

const ScanCard: FunctionComponent<Props> = () => {
    return (
        <div className='scancard'>
            <div>
                <h4>Toetstaken</h4>
                <br />
                <h4>Kwaliteitscriteria</h4>
                <br />
                <span className='scancard__span'><h4>Positie</h4><p> - In welke beschrijving herken je jouw opleiding nu het meest?</p></span>
                <br />
                <span className='scancard__span scancard__span--ambition'>
                    <h4 className='scancard--asterix'>*</h4>
                    <h4>Ambitie</h4>
                    <p> - Welke beschrijving past over 2 jaar het beste bij jouw opleiding?</p>
                </span>

                <form>
                    
                </form>
            </div>
            <img className='scancard__illustration' src={ToetstakenIllu} alt="illustratieve afbeelding" />
        </div>
    )
}

export default ScanCard;