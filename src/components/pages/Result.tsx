import React, {FunctionComponent, useEffect} from 'react';
import {Page} from 'buro-lib-ts';
import Button from "../layout/Button";
import ResultFragment from "../layout/ResultFragment";
import scanData from "../../assets/data/scandata.json";
import downloadFile from "../../utils/FileDownloader";
import JSZip from 'jszip';

const saveAs = require('save-svg-as-png');

interface Props {
}

const Result: FunctionComponent<Props> = () => {

    const entities = scanData.entities;

    useEffect(() => {
        entities.forEach((entity, entityIndex) => {
            entity.elements.forEach((element, elementIndex) => {
                const rawAnswer = window.localStorage.getItem(`${entityIndex}.${elementIndex}`);
                const answer = JSON.parse(rawAnswer as string);
                
                if (answer.checkedPositie === -1 || answer.checkedAmbitie === -1
                    || answer.feedbackPositie === "" || answer.feedbackAmbitie === "") {
                    window.location.href = '/scan';
                }
            })
        });
    }, []);

    const getPositionResult = (entity: number, element: number) => {
        const answer = JSON.parse(
            window.localStorage.getItem(`${entity}.${element}`) as string
        );

        return answer.checkedPositie + 1;
    }

    const getPositionFeedback = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.feedbackPositie;
    }

    const getAmbitionResult = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.checkedAmbitie + 1;
    }

    const getAmbitionFeedback = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.feedbackAmbitie;
    }

    const downloadAdviceBooklet = () => {
        fetch('advice-booklet.pdf').then(response => {
            response.blob().then(blob => {
                downloadFile(blob, 'advice-booklet.pdf');
            });
        })
    }

    const downloadResults = () => {
        const zip = new JSZip();
        let fileData = "";

        entities.forEach((entity, entityIndex) => {
            fileData += entity.name + "\n";
            entity.elements.forEach((element, elementIndex) => {
                fileData += element.name + "\n";
                fileData += "Positie: " + element.phases[getPositionResult(entityIndex, elementIndex)] + "\n";
                fileData += "Positie toelichting: " + getPositionFeedback(entityIndex, elementIndex) + "\n";
                fileData += "Ambitie: " + element.phases[getAmbitionResult(entityIndex, elementIndex)] + "\n";
                fileData += "Ambitie toelichting: " + getAmbitionFeedback(entityIndex, elementIndex) + "\n\n";
            });
            fileData += "\n";
        });

        zip.file('Resultaten.txt', fileData);

        const icons: Element[] = [];
        document.querySelectorAll('.svg-model').forEach(svg => icons.push(svg));

        Promise.all(icons.map(svg => saveAs.svgAsPngUri(svg))).then(([one, two]) => {
            zip.file('Positie.png', one.replace(/^data:image\/(png|jpg);base64,/, ""), { base64: true });
            zip.file('Ambitie.png', two.replace(/^data:image\/(png|jpg);base64,/, ""), { base64: true });

            zip.generateAsync({ type: 'blob' }).then(content => {
                downloadFile(content, 'Resultaat.zip');
            });
        });
    }

    return (
        <Page className='result'>
            <h1 className='result__title'>Resultaat</h1>
            <div className='result__container'>
                <ResultFragment pageTitle={'Positie'} getResult={getPositionResult} getFeedback={getPositionFeedback} />
                <ResultFragment pageTitle={'Ambitie'} getResult={getAmbitionResult} getFeedback={getAmbitionFeedback} />
            </div>
            <div className='result__download-container'>
                <div className='result__download-button'>
                    <Button onClick={downloadResults} baseClass={'color-blue'} children={
                        <span><p>Download</p></span>
                    }></Button>
                </div>
                <div className='result__download-button'>
                    <Button onClick={downloadAdviceBooklet} baseClass={'color-blue'} children={
                        <span><p>Download Advies</p></span>
                    }></Button>
                </div>
            </div>
        </Page>
    )
}

export default Result;
