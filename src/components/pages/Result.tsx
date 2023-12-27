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
import {getPhaseOfSelectId} from "../../models/Phase";
import {ScanDataContext} from "../../utils/contexts/ScanDataContext";

const saveAs = require('save-svg-as-png');

enum AnswerTypes {
    POSITION_RESULT = "checkedPositie",
    POSITION_FEEDBACK = "feedbackPositie",
    AMBITION_RESULT = "checkedAmbitie",
    AMBITION_FEEDBACK = "feedbackAmbitie"
}

const Result = () => {

    const {getTranslation} = useContext(LanguageContext);
    const {scanData: entities} = useContext(ScanDataContext);

    useTitle(`${getTranslation("nav.title")} - ${getTranslation("nav.result")}`);

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

    const getResult = (answerType: AnswerTypes, entity: number, element: number) => {
        const answer = JSON.parse(
            window.localStorage.getItem(`${entity}.${element}`) as string
        );
        return answer[answerType];
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
                fileData += `${getTranslation("position")}: ${element.phases[getResult(AnswerTypes.POSITION_RESULT, entityIndex, elementIndex)].description}\n`;
                fileData += `${getTranslation("results.positionexplanation")}: ${getResult(AnswerTypes.POSITION_FEEDBACK, entityIndex, elementIndex) || getTranslation("results.notfilledin")}\n`;
                fileData += `${getTranslation("ambition")}: ${element.phases[getResult(AnswerTypes.AMBITION_RESULT, entityIndex, elementIndex)].description}\n`;
                fileData += `${getTranslation("results.ambitionexplanation")}: ${getResult(AnswerTypes.AMBITION_FEEDBACK, entityIndex, elementIndex) || getTranslation("results.notfilledin")}\n\n`;
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

    const getResultData = (answerType: AnswerTypes, getResult: (answerType: AnswerTypes, entity: number, element: number) => number) => {

        return entities.map((entity, entityIndex) => {
            const subResults = [
                getResult(answerType, entityIndex, 0),
                getResult(answerType, entityIndex, 1),
                getResult(answerType, entityIndex, 2)
            ];

            return getPhaseOfSelectId(subResults.join('')) + 1;
        });
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
                        <AssignmentModel results={getResultData(AnswerTypes.POSITION_RESULT, getResult)}/>
                    </div>
                    <div className={"result__container--item"}>
                        <AssignmentModel results={getResultData(AnswerTypes.AMBITION_RESULT, getResult)}/>
                    </div>
                </div>

                <p className={"result__model-explanation"}>{getTranslation("home.modelExplained")}</p>

                {
                    entities.map((entity, entityIndex) => {
                        const color = entity.color;
                        const explanation = getTranslation("explanation");

                        return (
                            <div key={entity.name} className={"result__container"}>
                                <Card className={"result__container--item"}>
                                    <h3 style={{color: color}}>{entity.name}</h3>
                                    {
                                        entity.elements.map((element, elementIndex) => {
                                            return (
                                                <div key={element.name}>
                                                    <h2 style={{color: color}}>{element.name}</h2>
                                                    <p>{element.phases[getResult(AnswerTypes.POSITION_RESULT, entityIndex, elementIndex)].description}</p>
                                                    <p>
                                                        {explanation}: <i>
                                                        {getResult(AnswerTypes.POSITION_FEEDBACK, entityIndex, elementIndex) || getTranslation("results.notfilledin")}
                                                    </i></p>
                                                    <br/>
                                                </div>
                                            );
                                        })
                                    }
                                </Card>
                                <Card className={"result__container--item"}>
                                    <h3 style={{color: color}}>{entity.name}</h3>
                                    {
                                        entity.elements.map((element, elementIndex) => {
                                            return (
                                                <div key={element.name}>
                                                    <h2 style={{color: color}}>{element.name}</h2>
                                                    <p>{element.phases[getResult(AnswerTypes.AMBITION_RESULT, entityIndex, elementIndex)].description}</p>
                                                    <p>
                                                        {explanation}: <i>
                                                        {getResult(AnswerTypes.AMBITION_FEEDBACK, entityIndex, elementIndex) || getTranslation("results.notfilledin")}
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
                    <Button onClick={downloadResults} backgroundColor={entities[0].color}>
                        <span><p>{getTranslation("results.downloadresults")}</p></span>
                    </Button>
                </div>

                <div className='result__download-button'>
                    <Button onClick={downloadAdviceBooklet} backgroundColor={entities[0].color} disabled>
                        <div data-tooltip-id={'downloadAdviceBooklet'}>
                            <span><p>{getTranslation("results.downloadadvice")}</p></span>
                            <Tooltip id={"downloadAdviceBooklet"} place="top">
                                <span>{getTranslation("results.functionnotavailable")}</span>
                            </Tooltip>
                        </div>
                    </Button>
                </div>

                <div className='result__download-button'>
                    <Button onClick={resetScan} backgroundColor={entities[0].color}>
                        <span><p>{getTranslation("results.resetscan")}</p></span>
                    </Button>
                </div>
            </div>
        </Page>
    )
}

export default Result;
