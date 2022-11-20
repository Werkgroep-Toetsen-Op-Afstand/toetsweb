import React, {FunctionComponent, useEffect, useMemo, useState} from 'react';
import TextArea from "./TextArea";
import HorizontalCheckbox from "./HorizontalCheckbox";
import Button from "./Button";
import Toetstaken from "../../assets/images/IllustratieToetstaken.svg"
import Toetsprogramma from "../../assets/images/IllustratieToetsprogramma.svg"
import Toetsorganisatie from "../../assets/images/IllustratieToetsorganisatie.svg"
import Toetsbeleid from "../../assets/images/IllustratieToetsbeleid.svg"
import Toetsbekwaamheid from "../../assets/images/IllustratieToetsbekwaamheid.svg"
import {ProgressDot} from "./ProgressDot";
import data from "../../assets/data/scandata.json";

interface Props {
    entity: number;
    element: number;
    handleNext: (previousElement: number) => void;
}

interface ScanCardData {
    checkedPositie: number,
    checkedAmbitie: number,
    feedbackPositie: string,
    feedbackAmbitie: string,
}

const ScanCard: FunctionComponent<Props> = ({entity, element, handleNext}) => {
    const currentEntity = data.entities[entity]
    const currentElement = currentEntity.elements[element];
    const elementPhases = currentElement.phases;

    const baseClasses = ['color-blue', 'color-cyan', 'color-purple', 'color-orange', 'color-green'];
    const images = [Toetstaken, Toetsprogramma, Toetsbeleid, Toetsorganisatie, Toetsbekwaamheid];

    const [scanCardData, setScanCardData] = useState<ScanCardData>({} as ScanCardData);

    useMemo(() => {
        const data =
            window.localStorage.getItem(`${entity}.${element}`) ?
                JSON.parse(window.localStorage.getItem(`${entity}.${element}`) as string)
                : {
                    checkedPositie: -1,
                    checkedAmbitie: -1,
                    feedbackPositie: '',
                    feedbackAmbitie: ''
                }
        setScanCardData(data);
    }, [entity, element]);

    const handleCheckedPositie = (selectedPosition: number) => {
        setScanCardData({
            ...scanCardData,
            checkedPositie: selectedPosition === scanCardData.checkedPositie ? -1 : selectedPosition
        });
    }

    const handleCheckedAmbitie = (selectedAmbition: number) => {
        setScanCardData({
            ...scanCardData,
            checkedAmbitie: selectedAmbition === scanCardData.checkedAmbitie ? -1 : selectedAmbition
        });
    }

    const handleFeedback = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setScanCardData({...scanCardData, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        window.localStorage.setItem(`${entity}.${element}`, JSON.stringify(scanCardData));
    }, [scanCardData]);

    const scanElementComplete =
        scanCardData.checkedPositie !== -1 &&
        scanCardData.checkedAmbitie !== -1 &&
        scanCardData.feedbackPositie !== '' &&
        scanCardData.feedbackAmbitie !== '';

    return (
        <div className={`scancard ${baseClasses[entity]}__border-top`}>
            <div className='scancard__grid'>
                <div>
                    <div>
                        <h4>{currentEntity.name}</h4>
                        <br/>
                        <h4>{currentElement.name}</h4>
                        <br/>
                        <span className='scancard__grid__span'>
                            <h4>Positie</h4>
                            <p> - In welke beschrijving herken je jouw opleiding nu het meest?</p>
                        </span>
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
                                            checkedPositie={scanCardData.checkedPositie}
                                            handleCheckedPositie={handleCheckedPositie}
                                            checkedAmbitie={scanCardData.checkedAmbitie}
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
                <TextArea value={scanCardData.feedbackPositie} setValue={handleFeedback}
                          titleTextArea={'Positie'}
                          name={'feedbackPositie'}
                          hintTextArea={'Licht je antwoord toe.'}/>
                <TextArea value={scanCardData.feedbackAmbitie} setValue={handleFeedback}
                          titleTextArea={'Ambitie'}
                          name={'feedbackAmbitie'}
                          hintTextArea={'Licht je antwoord toe.'}/>
            </div>
            <div className='scancard__progress'>
                <div className='scancard__progress__container'>
                    <ProgressDot baseClass={baseClasses[entity]} filledIn={element === 0}/>
                    <ProgressDot baseClass={baseClasses[entity]} filledIn={element === 1}/>
                    <ProgressDot baseClass={baseClasses[entity]} filledIn={element === 2}/>
                </div>
                <div className='scancard__progress__button-container'>
                    <Button onClick={() => {                        
                        if (scanElementComplete) {
                            console.log('clicked');
                            handleNext(element);
                            window.scrollTo(0, 0);
                        }
                    }} baseClass={baseClasses[entity]} children={
                        <span><p>Volgende vraag</p></span>
                    }></Button>
                </div>
            </div>
        </div>
    )
}

export default ScanCard;
