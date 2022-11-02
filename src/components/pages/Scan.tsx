import ScanCard from 'components/layout/ScanCard';
import React, {FunctionComponent} from 'react';
import {Page} from "react-ts-boiler";

interface Props {
}

const Scan: FunctionComponent<Props> = () => {
    return (
        <Page className='scan'>
            <h1 className='scan__title'>Scan</h1>
            <br/>
            <br/>
            <ScanCard entity={0} element={0}/>
        </Page>
    )
}

export default Scan;