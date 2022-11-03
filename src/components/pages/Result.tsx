import React, {FunctionComponent} from 'react';
import {Page} from "react-ts-boiler";
import Button from "../layout/Button";
import ResultFragment from "../layout/ResultFragment";

interface Props {
}

const Result: FunctionComponent<Props> = () => {

    return (
        <Page className='result'>
            <h1 className='result__title'>Resultaat</h1>
            <div className='result__container'>
                <ResultFragment pageTitle={'Positie'}/>
                <ResultFragment pageTitle={'Ambitie'}/>
            </div>
            <div className='result__download'>
                <Button onClick={() => console.log('download clicked')} baseClass={'color-blue'} children={
                    <span><p>Download</p></span>
                }></Button>
            </div>
        </Page>
    )
}

export default Result;