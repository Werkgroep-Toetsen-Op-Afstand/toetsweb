import React, {FunctionComponent} from "react";
import ToetsmodelComponent from "./ToetsmodelComponent";
import Table from "./Table";

interface Props {
    pageTitle: string;
}

const ResultFragment: FunctionComponent<Props> = ({pageTitle}) => {

    const positionData = [
        ['Toetsweb', 'Kwaliteitscriteria', 'Ontwerp', 'Borging', 'Fase'],
        ['Toets(tak)en', 2, 2, 1, 1],
        ['Toetsprogramma', 3, 1, 2, 2],
        ['Toetsbeleid', 4, 3, 2, 2],
        ['Toetsorganisatie', 2, 2, 2, 2],
        ['Toetsbekwaamheid', 3, 2, 2, 2],
    ];

    return (
        <div className='result-fragment'>
            <h1 className='result-fragment__title'>{pageTitle}</h1>
            <ToetsmodelComponent/>
            <Table tableTitle={pageTitle} data={positionData}/>
            <div className='result-fragment__answer-card'>

            </div>
        </div>
    )
}

export default ResultFragment;