import {Page} from 'buro-lib-ts';
import ScanCard from '../layout/ScanCard';
import React, {FunctionComponent, useState} from 'react';

interface Props {}

const Scan: FunctionComponent<Props> = () => {

    const [currentEntity, setCurrentEntity] = useState(0);
    const [currentElement, setCurrentElement] = useState(0);

    const handleNext = (previousElement: number) => {
        
        if(previousElement === 2) {
            if (currentEntity === 4) {
                window.location.href = '/result';
                return;
            }
            setCurrentElement(0);
            setCurrentEntity(currentEntity + 1);
            return;
        }
        setCurrentElement(currentElement + 1);
    }

    return (
        <Page className='scan'>
            <h1 className='scan__title'>Scan</h1>
            <br/>
            <br/>
            <ScanCard entity={currentEntity} element={currentElement} handleNext={handleNext} />
        </Page>
    )
}

export default Scan;
