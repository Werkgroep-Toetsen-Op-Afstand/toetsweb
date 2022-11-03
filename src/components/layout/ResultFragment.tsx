import React, {FunctionComponent} from "react";
import ToetsmodelComponent from "./ToetsmodelComponent";
import Table from "./Table";
import data from "../../assets/data/toetsweb.json";

interface Props {
    pageTitle: string;
    getResult: (entity: number, element: number) => number;
    getFeedback: (entity: number, element: number) => string;
}

const ResultFragment: FunctionComponent<Props> = ({pageTitle, getResult, getFeedback}) => {

    const entities = data.entities;

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
                {
                    entities.map((entity, entityIndex) => {
                        const elements = entity.elements;
                        return (
                            <div>
                                <h3>{entity.name}</h3>
                                {
                                    elements.map((element, elementIndex) => {
                                        return (
                                            <div>
                                                <h4>{element.name}</h4>
                                                <p>{element.phases[getResult(entityIndex, elementIndex)]}</p>
                                                <p>Toelichting: {getFeedback(entityIndex, elementIndex)}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ResultFragment;