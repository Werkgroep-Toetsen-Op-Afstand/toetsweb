import React, {useContext, useMemo} from 'react';
import Button from "../layout/Button";
import downloadFile from "../../utils/FileDownloader";
import JSZip from 'jszip';
import {Tooltip} from "react-tooltip";
import {useTitle} from "../../utils/hooks/TitleHook";
import {LanguageContext} from "../../utils/contexts/LanguageContext";
import Page from "../Page";
import Card from "../layout/Card";
import AssignmentModel from "../layout/toetsmodel/AssignmentModel";
import resultData from "../../assets/data/resultdata.json";

const saveAs = require('save-svg-as-png');

const Result = () => {

    const {getScanData, getTranslation} = useContext(LanguageContext);

    useTitle(`${getTranslation("nav.title")} - ${getTranslation("nav.result")}`);

    const entities = getScanData().entities;

    const baseClasses = ['color-blue', 'color-cyan', 'color-purple', 'color-orange', 'color-green'];

    useMemo(() => {
        entities.forEach((entity, entityIndex) => {
            entity.elements.forEach((element, elementIndex) => {
                const rawAnswer = window.localStorage.getItem(`${entityIndex}.${elementIndex}`);
                const answer = JSON.parse(rawAnswer as string);

                if (rawAnswer === null) {
                    window.location.href = '/scan';
                }

                if (answer.checkedPositie === -1 || answer.checkedAmbitie === -1) {
                    window.location.href = '/scan';
                }
            })
        });
    }, [entities]);

    const getPositionResult = (entity: number, element: number) => {
        const answer = JSON.parse(
            window.localStorage.getItem(`${entity}.${element}`) as string
        );

        return answer.checkedPositie;
    }

    const getPositionFeedback = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.feedbackPositie === "" ? getTranslation("results.notfilledin") : answer.feedbackPositie
    }

    const getAmbitionResult = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.checkedAmbitie;
    }

    const getAmbitionFeedback = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.feedbackAmbitie === "" ? getTranslation("results.notfilledin") : answer.feedbackAmbitie;
    }

    const downloadAdviceBooklet = () => {
        // fetch('advice-booklet.pdf').then(response => {
        //     response.blob().then(blob => {
        //         downloadFile(blob, 'advice-booklet.pdf');
        //     });
        // });
    }

    const resetScan = () => {
        window.localStorage.clear();
        window.location.href = '/scan';
    }

    const downloadResults = () => {
        const zip = new JSZip();
        let fileData = "";

        entities.forEach((entity, entityIndex) => {
            fileData += `${entity.name}\n`;
            entity.elements.forEach((element, elementIndex) => {
                fileData += `${element.name}\n`;
                fileData += `${getTranslation("position")}: ${element.phases[getPositionResult(entityIndex, elementIndex)]}\n`;
                fileData += `${getTranslation("results.positionexplanation")}: ${getPositionFeedback(entityIndex, elementIndex)}\n`;
                fileData += `${getTranslation("ambition")}: ${element.phases[getAmbitionResult(entityIndex, elementIndex)]}\n`;
                fileData += `${getTranslation("results.ambitionexplanation")}: ${getAmbitionFeedback(entityIndex, elementIndex)}\n\n`;
            });
            fileData += "\n";
        });

        zip.file(`${getTranslation("nav.result")}.txt`, fileData);
        Promise.all(
            Array.from(document.querySelectorAll('.assignment-model'))
                .map(svg => saveAs.svgAsPngUri(svg))
        ).then(([position, ambition]) => {
            zip.file(`${getTranslation("position")}.png`, position.replace(/^data:image\/(png|jpg);base64,/, ""), {base64: true});
            zip.file(`${getTranslation("ambition")}.png`, ambition.replace(/^data:image\/(png|jpg);base64,/, ""), {base64: true});

            zip.generateAsync({type: 'blob'}).then(content => {
                downloadFile(content, `${getTranslation("nav.result")}.zip`);
            });
        });
    }

    const getResultData = (getResult: (entity: number, element: number) => number) => {
        return entities.map((entity, entityIndex) => {
            const subResults = [
                getResult(entityIndex, 0),
                getResult(entityIndex, 1),
                getResult(entityIndex, 2)
            ];

            return getEndResult(subResults.join(''));
        });
    }

    const getEndResult = (results: string) => {
        const phases = resultData.phases;
        let phaseID = 1;
        phases.forEach((phase) => {
            const selectIDs = phase.selectIDs;
            selectIDs.forEach((selectID) => {
                if (results === selectID) {
                    phaseID = parseInt(phase.phaseID);
                }
            });
        });
        return phaseID;
    }

    return (
        <Page className='result'>
            <div>
                <div className={"result__container result__subtitle"}>
                    <h1 className={"result__container--item"}>{getTranslation("position")}</h1>
                    <h1 className={"result__container--item"}>{getTranslation("ambition")}</h1>
                </div>

                <div className={"result__container"}>
                    <div className={"result__container--item"}>
                        <AssignmentModel results={getResultData(getPositionResult)}/>
                    </div>
                    <div className={"result__container--item"}>
                        <AssignmentModel results={getResultData(getAmbitionResult)}/>
                    </div>
                </div>

                <p className={"result__model-explanation"}>{getTranslation("home.modelExplained")}</p>

                {
                    entities.map((entity, entityIndex) => {

                        const titleClass = `${baseClasses[entityIndex]}__text`;

                        return (
                            <div className={"result__container"}>
                                <Card className={"result__container--item"}>
                                    <h3 className={titleClass}>{entity.name}</h3>
                                    {
                                        entity.elements.map((element, elementIndex) => {
                                            return (
                                                <div key={elementIndex}>
                                                    <h2 className={titleClass}>{element.name}</h2>
                                                    <p>{element.phases[getPositionResult(entityIndex, elementIndex)]}</p>
                                                    <p>
                                                        {getTranslation("explanation")}: <i>
                                                        {getPositionFeedback(entityIndex, elementIndex)}
                                                    </i></p>
                                                    <br/>
                                                </div>
                                            );
                                        })
                                    }
                                </Card>
                                <Card className={"result__container--item"}>
                                    <h3 className={titleClass}>{entity.name}</h3>
                                    {
                                        entity.elements.map((element, elementIndex) => {
                                            return (
                                                <div key={elementIndex}>
                                                    <h2 className={titleClass}>{element.name}</h2>
                                                    <p>{element.phases[getAmbitionResult(entityIndex, elementIndex)]}</p>
                                                    <p>
                                                        {getTranslation("explanation")}: <i>
                                                        {getAmbitionFeedback(entityIndex, elementIndex)}
                                                    </i></p>
                                                    <br/>
                                                </div>
                                            );
                                        })
                                    }
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

            <div className='result__download-container'>
                <div className='result__download-button'>
                    <Button onClick={downloadResults} baseClass={'color-blue'}>
                        <span><p>{getTranslation("results.downloadresults")}</p></span>
                    </Button>
                </div>

                <div className='result__download-button'>
                    <Button onClick={downloadAdviceBooklet} baseClass={'color-blue'} disabled>
                        <div data-tooltip-id={'downloadAdviceBooklet'}>
                            <span><p>{getTranslation("results.downloadadvice")}</p></span>
                            <Tooltip id={"downloadAdviceBooklet"} place="top">
                                <span>{getTranslation("results.functionnotavailable")}</span>
                            </Tooltip>
                        </div>
                    </Button>
                </div>

                <div className='result__download-button'>
                    <Button onClick={resetScan} baseClass={'color-blue'}>
                        <span><p>{getTranslation("results.resetscan")}</p></span>
                    </Button>
                </div>
            </div>
        </Page>
    )
}

export default Result;
