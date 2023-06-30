import {FunctionComponent, useContext, useMemo} from 'react';
import {Page} from 'buro-lib-ts';
import Button from "../layout/Button";
import ResultFragment from "../layout/ResultFragment";
import downloadFile from "../../utils/FileDownloader";
import JSZip from 'jszip';
import {Tooltip} from "react-tooltip";
import {useTitle} from "../../utils/hooks/TitleHook";
import {LanguageContext} from "../../utils/contexts/LanguageContext";

const saveAs = require('save-svg-as-png');

interface Props {
}

const Result: FunctionComponent<Props> = () => {

    const {getScanData, getTranslation} = useContext(LanguageContext);

    useTitle(`${getTranslation("nav.title")} - ${getTranslation("nav.result")}`);

    const entities = getScanData().entities;

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

    return (
        <Page className='result'>
            <h1 className='result__title'>{getTranslation("nav.result")}</h1>

            <div className='result__container'>
                <ResultFragment fragmentTitle={getTranslation("position")} getResult={getPositionResult} getFeedback={getPositionFeedback}/>
                <ResultFragment fragmentTitle={getTranslation("ambition")} getResult={getAmbitionResult} getFeedback={getAmbitionFeedback}/>
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
