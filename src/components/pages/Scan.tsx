import ScanCard from 'components/layout/ScanCard';
import React, { FunctionComponent } from 'react';
import {Page} from "react-ts-boiler";
import Toetstaken from "../../assets/images/IllustratieToetstaken.svg"
import Toetsprogramma from "../../assets/images/IllustratieToetsprogramma.svg"
import Toetsorganisatie from "../../assets/images/IllustratieToetsorganisatie.svg"
import Toetsbeleid from "../../assets/images/IllustratieToetsbeleid.svg"
import Toetsbekwaamheid from "../../assets/images/IllustratieToetsbekwaamheid.svg"

interface Props {}

const Scan: FunctionComponent<Props> = () => {
    return (
        <Page className='scan'>
            <h1 className='scan__title'>Scan</h1>
            <br />
            <br />
            <ScanCard image={Toetstaken} baseClass={'color-orange'}/>
        </Page>
    )
}

export default Scan;