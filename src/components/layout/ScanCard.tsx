import React, {FunctionComponent, useContext, useEffect, useMemo, useState} from 'react';
import TextArea from "./TextArea";
import HorizontalCheckbox from "./HorizontalCheckbox";
import Button from "./Button";
import Toetstaken from "../../assets/images/IllustratieToetstaken.svg"
import Toetsprogramma from "../../assets/images/IllustratieToetsprogramma.svg"
import Toetsorganisatie from "../../assets/images/IllustratieToetsorganisatie.svg"
import Toetsbeleid from "../../assets/images/IllustratieToetsbeleid.svg"
import Toetsbekwaamheid from "../../assets/images/IllustratieToetsbekwaamheid.svg"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressDots from "./ProgressDots";
import {LanguageContext} from "../../utils/contexts/LanguageContext";

interface Props {
    entity: number;
    element: number;
    handleNext: () => void;
    handlePrevious: () => void;
}

interface ScanCardData {
    checkedPositie: number,
    checkedAmbitie: number,
    feedbackPositie: string,
    feedbackAmbitie: string,
}

const ScanCard: FunctionComponent<Props> = ({entity, element, handleNext, handlePrevious}) => {

    const {getScanData, getTranslation} = useContext(LanguageContext);
    const currentEntity = getScanData().entities[entity]
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

    const handleButtonNext = () => {
        if (scanElementComplete) {
            handleNext();
        } else {
            toast.error(getTranslation('positionambitionempty'));
        }
    }

    useEffect(() => {
        window.localStorage.setItem(`${entity}.${element}`, JSON.stringify(scanCardData));
    }, [entity, element, scanCardData]);

    const scanElementComplete = scanCardData.checkedPositie !== -1 && scanCardData.checkedAmbitie !== -1

    return (
        <div className={`scancard ${baseClasses[entity]}__border-top`}>
            <div className='scancard__grid'>
                <div>
                    <div className='scancard__titles'>
                        <h3 className={`${baseClasses[entity]}__text`}>{currentEntity.name} - {currentElement.name}</h3>

                        <span className='scancard__titles__container'>
                            <h4>{getTranslation('position')}</h4>
                            <p className={'scancard__titles__container__subtitle'}>
                                 - {getTranslation('position.description')}
                            </p>
                        </span>
                        <span className={`scancard__titles__container ${baseClasses[entity]}__transparent-bg`}>
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
                                <div className={`hor-check__container ${baseClasses[entity]}__transparent-bg`}>
                                    <p className='hor-check__container__label'>{getTranslation('ambition')}</p>
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
                <TextArea value={scanCardData.feedbackPositie}
                          setValue={handleFeedback}
                          titleTextArea={getTranslation('position')}
                          name={'feedbackPositie'}
                          hintTextArea={getTranslation('scan.explain')}/>
                <TextArea value={scanCardData.feedbackAmbitie}
                          setValue={handleFeedback}
                          titleTextArea={getTranslation('ambition')}
                          name={'feedbackAmbitie'}
                          hintTextArea={getTranslation('scan.explain')}/>
            </div>
            <div className='scancard__progress'>
                <Button baseClass={baseClasses[entity]} onClick={handlePrevious}
                        disabled={entity === 0 && element === 0}>
                    <span><p>{getTranslation('scan.previous')}</p></span>
                </Button>
                <ProgressDots baseClass={baseClasses[entity]} currentStep={element + 1} totalSteps={3}/>
                <Button baseClass={baseClasses[entity]} onClick={handleButtonNext}>
                        <span>
                            <p>{(entity === 4 && element === 2) ?
                                getTranslation('scan.toresults') :
                                getTranslation('scan.next')}</p>
                        </span>
                </Button>
            </div>
        </div>
    )
}

export default ScanCard;
