import React, {FunctionComponent, useEffect} from 'react';
import TextArea from "./TextArea";
import HorizontalCheckbox from "./HorizontalCheckbox";
import Button from "./Button";
import all from "../../assets/data/toetsweb.json";
import Toetstaken from "../../assets/images/IllustratieToetstaken.svg"
import Toetsprogramma from "../../assets/images/IllustratieToetsprogramma.svg"
import Toetsorganisatie from "../../assets/images/IllustratieToetsorganisatie.svg"
import Toetsbeleid from "../../assets/images/IllustratieToetsbeleid.svg"
import Toetsbekwaamheid from "../../assets/images/IllustratieToetsbekwaamheid.svg"
import useLocalStorage from "../../utils/LocalStorage";
import Scan from "../pages/Scan";

interface Props {
    entity: number;
    element: number;
}

const ScanCardData = {
    checkedPositie : -1,
    checkedAmbitie : -1,
    feedbackPositie : '',
    feedbackAmbitie : '',
}

const ScanCard: FunctionComponent<Props> = ({entity, element}) => {

    const currentEntity = all.entities[entity];
    const currentElement = currentEntity.elements[element];
    const elementPhases = currentElement.phases;

    const baseClasses = ['color-blue', 'color-cyan', 'color-purple', 'color-orange', 'color-green'];
    const images = [Toetstaken, Toetsprogramma, Toetsbeleid, Toetsorganisatie, Toetsbekwaamheid];

    const [checkedPositie, setCheckedPositie] = useLocalStorage(`${entity}.${element}.checkedPositie`, -1);
    const [checkedAmbitie, setCheckedAmbitie] = useLocalStorage(`${entity}.${element}.checkedAmbitie`, -1);

    const handleCheckedPositie = (pos: number) => {
        setCheckedPositie(pos === checkedPositie ? -1 : pos);
        ScanCardData.checkedPositie = pos === checkedPositie ? -1 : pos;
    }

    const handleCheckedAmbitie = (amb: number) => {
        setCheckedAmbitie(amb === checkedAmbitie ? -1 : amb);
        ScanCardData.checkedAmbitie = amb === checkedAmbitie ? -1 : amb;
    }

    useEffect(() => {
        try {
            window.localStorage.setItem(`${entity}.${element}`, JSON.stringify(ScanCardData));
        } catch (error) {
            console.log(error);
        }
    }, [ScanCardData.checkedPositie, ScanCardData.checkedAmbitie, ScanCardData.feedbackPositie, ScanCardData.feedbackAmbitie]);

    // ScanCardData.checkedPositie = 1;
    // ScanCardData.checkedAmbitie = 2;
    // ScanCardData.feedbackPositie = 'test';
    // ScanCardData.feedbackAmbitie = 'test2';
    // try {
    //     window.localStorage.setItem(`${entity}.${element}`, JSON.stringify(ScanCardData));
    // } catch (error) {
    //     console.log(error);
    // }

    return (
        <div className={`scancard ${baseClasses[entity]}__border-top`}>
            <div className='scancard__grid'>
                <div>
                    <div>
                        <h4>{currentEntity.name}</h4>
                        <br/>
                        <h4>{currentElement.name}</h4>
                        <br/>
                        <span className='scancard__grid__span'><h4>Positie</h4><p> - In welke beschrijving herken je jouw opleiding nu het meest?</p></span>
                        <br/>
                        <span
                            className={`scancard__grid__span scancard__grid__span--ambition ${baseClasses[entity]}__transparent-bg`}>
                    <h4 className={`${baseClasses[entity]}__text`}>*</h4>
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
                                <div className={`hor-check__container ${baseClasses[entity]}__transparent-bg`}>
                                    <p className='hor-check__container__label'>Ambitie</p>
                                </div>
                            </div>
                            {
                                elementPhases.map((phase, index) => {
                                    return (
                                        <HorizontalCheckbox
                                            key={index}
                                            checkedPositie={checkedPositie}
                                            handleCheckedPositie={handleCheckedPositie}
                                            checkedAmbitie={checkedAmbitie}
                                            handleCheckedAmbitie={handleCheckedAmbitie}
                                            position={index}
                                            rowText={elementPhases[index]}
                                            baseClass={baseClasses[entity]}/>
                                    )
                                })
                            }
                        </div>
                    </form>
                </div>
                <img className='scancard__grid__illustration' src={images[entity]} alt="illustratieve afbeelding"/>
            </div>
            <div className='scancard__textarea-container'>
                <TextArea entity={entity} element={element} titleTextArea={'Positie'}
                          hintTextArea={'Licht je antwoord toe.'}/>
                <TextArea entity={entity} element={element} titleTextArea={'Ambitie'}
                          hintTextArea={'Licht je antwoord toe.'}/>
            </div>
            <div className='scancard__progress'>
                <div className='scancard__progress__container'>
                    <span
                        className={`scancard__progress__container__dot ${baseClasses[entity]}__border ${baseClasses[entity]}__bg`}></span>
                    <span className={`scancard__progress__container__dot ${baseClasses[entity]}__border`}></span>
                    <span className={`scancard__progress__container__dot ${baseClasses[entity]}__border`}></span>
                </div>
                <div className='scancard__progress__button-container'>
                    <Button onClick={() => console.log("next clicked")} baseClass={baseClasses[entity]} children={
                        <span><p>Volgende vraag</p></span>
                    }></Button>
                </div>
            </div>
        </div>
    )
}

export default ScanCard;