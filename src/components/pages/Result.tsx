import React, {FunctionComponent, useEffect} from 'react';
import {Page} from "react-ts-boiler";
import Button from "../layout/Button";
import ResultFragment from "../layout/ResultFragment";
import data from "../../assets/data/toetsweb.json";

interface Props {
}

const Result: FunctionComponent<Props> = () => {

    const entities = data.entities;

    useEffect(() => {
        entities.forEach((entity, entityIndex) => {
            const elements = entity.elements;
            elements.forEach((element, elementIndex) => {
                const rawAnswer = window.localStorage.getItem(`${entityIndex}.${elementIndex}`);
                const answer = JSON.parse(rawAnswer as string);
                if (answer.checkedPositie === -1 || answer.checkedAmbitie === -1
                    || answer.feedbackPositie === "" || answer.feedbackAmbitie === "") {
                    window.location.href = '/scan';
                    return;
                }
            })
        })
    }, []);

    const getPositionResult = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.checkedPositie;
    }

    const getPositionFeedback = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.feedbackPositie;
    }

    const getAmbitionResult = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.checkedAmbitie;
    }

    const getAmbitionFeedback = (entity: number, element: number) => {
        const rawAnswer = window.localStorage.getItem(`${entity}.${element}`);
        let answer = JSON.parse(rawAnswer as string);
        return answer.feedbackAmbitie;
    }

    const downloadAdviceBooklet = () => {
        fetch('advice-booklet.pdf').then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = 'advies.pdf';
                a.click();
            });
        })
    }

    const downloadResults = () => {
        let fileData = ""

        entities.forEach((entity, entityIndex) => {
            fileData += entity.name + "\n";
            const elements = entity.elements;
            elements.forEach((element, elementIndex) => {
                fileData += element.name + "\n";
                fileData += "Positie: " + element.phases[getPositionResult(entityIndex, elementIndex)] + "\n";
                fileData += "Positie toelichting: " + getPositionFeedback(entityIndex, elementIndex) + "\n";
                fileData += "Ambitie: " + element.phases[getAmbitionResult(entityIndex, elementIndex)] + "\n";
                fileData += "Ambitie toelichting: " + getAmbitionFeedback(entityIndex, elementIndex) + "\n\n";
            });
            fileData += "\n";
        });

        const blob = new Blob([fileData],
            {type: 'text/plain;charset=utf-8'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resultaten.txt';
        a.click();
    }

    return (
        <Page className='result'>
            <h1 className='result__title'>Resultaat</h1>
            <div className='result__container'>
                <ResultFragment pageTitle={'Positie'} getResult={getPositionResult} getFeedback={getPositionFeedback}/>
                <ResultFragment pageTitle={'Ambitie'} getResult={getAmbitionResult} getFeedback={getAmbitionFeedback}/>
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