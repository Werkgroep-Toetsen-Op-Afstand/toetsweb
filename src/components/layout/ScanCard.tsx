import React, {FunctionComponent, useContext, useEffect} from 'react';
import TextArea from "./TextArea";
import HorizontalCheckbox from "./HorizontalCheckbox";
import Button from "./Button";
import Toetstaken from "../../assets/images/IllustratieToetstaken.svg"
import Toetsprogramma from "../../assets/images/IllustratieToetsprogramma.svg"
import Toetsorganisatie from "../../assets/images/IllustratieToetsorganisatie.svg"
import Toetsbeleid from "../../assets/images/IllustratieToetsbeleid.svg"
import Toetsbekwaamheid from "../../assets/images/IllustratieToetsbekwaamheid.svg"
import 'react-toastify/dist/ReactToastify.css';
import ProgressDots from "./ProgressDots";
import {LanguageContext} from "../../utils/contexts/LanguageContext";
import {Entity} from "../../models/Entity";
import {Element} from "../../models/Element";
import {Portal} from "./Portal";
import {ScanCardData} from "../pages/Scan";

interface Props {
    entity: Entity;
    entityIndex: number;
    element: Element;
    elementIndex: number;
    handleNext: () => void;
    handlePrevious: () => void;
    scanData: ScanCardData;
    setScanData: (data: ScanCardData) => void;
}

const ScanCard: FunctionComponent<Props> = ({
                                                entity,
                                                entityIndex,
                                                element,
                                                elementIndex,
                                                handleNext,
                                                handlePrevious,
                                                scanData,
                                                setScanData
                                            }) => {

    const {getTranslation} = useContext(LanguageContext);
    const images = [Toetstaken, Toetsprogramma, Toetsbeleid, Toetsorganisatie, Toetsbekwaamheid];

    const handleCheckedPositie = (selectedPosition: number) => {
        setScanData({
            ...scanData,
            checkedPositie: selectedPosition === scanData.checkedPositie ? -1 : selectedPosition
        });
    }

    const handleCheckedAmbitie = (selectedAmbition: number) => {
        setScanData({
            ...scanData,
            checkedAmbitie: selectedAmbition === scanData.checkedAmbitie ? -1 : selectedAmbition
        });
    }

    const handleFeedback = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setScanData({...scanData, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        window.localStorage.setItem(`${entityIndex}.${elementIndex}`, JSON.stringify(scanData));
    }, [entityIndex, elementIndex, scanData]);

    return (
        <div className={"scancard"} style={{borderTop: `1rem solid ${entity.color}`}}>
            <div className='scancard__grid'>
                <div>
                    <div className='scancard__titles'>
                        <span style={{color: entity.color}}>
                            <Portal trigger={
                                <h3>{entity.name} </h3>}>
                            <div className='toetsmodel-component__popup'>
                                <h4>{entity.name}</h4>
                                <p>{entity.description}</p>
                            </div>
                        </Portal><h3>- {element.name}</h3>
                    </span>


                        <span className='scancard__titles__container'>
                            <h4>{getTranslation('position')}</h4>
                            <p className={'scancard__titles__container__subtitle'}>
                                 - {getTranslation('position.description')}
                            </p>
                        </span>
                        <span className={"scancard__titles__container"} style={{backgroundColor: `${entity.color}2D`}}>
                            <h4>{getTranslation('ambition')}</h4>
                            <p className={'scancard__titles__container__subtitle'}>
                                - {getTranslation('ambition.description')}
                            </p>
                        </span>
                    </div>
                    <form className='scancard__grid__form'>
                        <div className='scancard__grid__form__checkbox'>
                            <div className='hor-check'>
                                <div className='hor-check__container'>
                                    <p className='hor-check__container__label'>{getTranslation('position')}</p>
                                </div>
                                <div className={"hor-check__container"} style={{backgroundColor: `${entity.color}2D`}}>
                                    <p className='hor-check__container__label'>{getTranslation('ambition')}</p>
                                </div>
                            </div>
                            {
                                element.phases.map((phase, index) => {
                                    return (
                                        <HorizontalCheckbox
                                            key={phase.name}
                                            checkedPositie={scanData.checkedPositie}
                                            handleCheckedPositie={handleCheckedPositie}
                                            checkedAmbitie={scanData.checkedAmbitie}
                                            handleCheckedAmbitie={handleCheckedAmbitie}
                                            position={index}
                                            rowText={phase.description}
                                            backgroundColor={`${entity.color}2D`}/>
                                    )
                                })
                            }
                        </div>
                    </form>
                </div>
                <img className='scancard__grid__illustration' src={images[entityIndex]} alt="illustratieve afbeelding"/>
            </div>
            <div className='scancard__textarea-container'>
                <TextArea value={scanData.feedbackPositie}
                          setValue={handleFeedback}
                          titleTextArea={getTranslation('position')}
                          name={'feedbackPositie'}
                          hintTextArea={getTranslation('scan.explain')}/>
                <TextArea value={scanData.feedbackAmbitie}
                          setValue={handleFeedback}
                          titleTextArea={getTranslation('ambition')}
                          name={'feedbackAmbitie'}
                          hintTextArea={getTranslation('scan.explain')}/>
            </div>
            <div className='scancard__progress'>
                <Button backgroundColor={entity.color} onClick={handlePrevious}
                        disabled={entityIndex === 0 && elementIndex === 0}>
                    <span><p>{getTranslation('scan.previous')}</p></span>
                </Button>
                <ProgressDots color={entity.color} currentStep={elementIndex + 1} totalSteps={3}/>
                <Button backgroundColor={entity.color} onClick={handleNext}>
                        <span>
                            <p>{(entityIndex === 4 && elementIndex === 2) ?
                                getTranslation('scan.toresults') :
                                getTranslation('scan.next')}</p>
                        </span>
                </Button>
            </div>
        </div>
    )
}

export default ScanCard;
