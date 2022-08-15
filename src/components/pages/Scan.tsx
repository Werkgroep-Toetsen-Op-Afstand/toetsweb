import ScanCard from 'components/layout/ScanCard';
import React, { FunctionComponent } from 'react';

interface Props {}

const Scan: FunctionComponent<Props> = () => {
    return (
        <div className='scan'>
            <h1 className='scan__title'>Scan</h1>
            <br />
            <br />
            <ScanCard/>
        </div>
    )
}

export default Scan;