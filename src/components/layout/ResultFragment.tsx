import React, {FunctionComponent} from "react";
import ToetsmodelComponent from "./ToetsmodelComponent";
import Table from "./Table";
import scanData from "../../assets/data/scandata.json";
import resultData from "../../assets/data/resultdata.json";
import Card from "./Card";

interface Props {
    pageTitle: string;
    getResult: (entity: number, element: number) => number;
    getFeedback: (entity: number, element: number) => string;
}

const ResultFragment: FunctionComponent<Props> = ({pageTitle, getResult, getFeedback}) => {

    const entities = scanData.entities;

    const getTableData = () => {
        const tableData: Array<Array<string>> = [];
        tableData.push(['Toetsweb', 'Kwaliteitscriteria', 'Ontwerp', 'Borging', 'Fase']);
        entities.forEach((entity, entityIndex) => {
            const results = [
                getResult(entityIndex, 0).toString(),
                getResult(entityIndex, 1).toString(),
                getResult(entityIndex, 2).toString()
            ];

            tableData.push([
                entity.name,
                results[0],
                results[1],
                results[2],
                getEndResult(results.join('')).toString()
            ]);
        });
        return tableData;
    }

    const getEndResult = (results: string) => {
        const phases = resultData.phases;
        let phaseID = 1;
        phases.forEach((phase) => {
            const selectIDs = phase.selectIDs;
            selectIDs.forEach((selectID) => {
                if (results == selectID) {
                    phaseID = parseInt(phase.phaseID);
                }
            });
        });
        return phaseID;
    }

    return (
        <div className='result-fragment'>
            <h1 className='result-fragment__title'>{pageTitle}</h1>
            <ToetsmodelComponent name={pageTitle} results={getTableData()}/>
            <Table tableTitle={pageTitle} data={getTableData()}/>
            <Card children={
                entities.map((entity, entityIndex) => {
                    return (
                        <div key={entityIndex}>
                            <h3>{entity.name}</h3>
                            {
                                entity.elements.map((element, elementIndex) => {
                                    return (
                                        <div key={elementIndex}>
                                            <h4>{element.name}</h4>
                                            <p>{element.phases[getResult(entityIndex, elementIndex)]}</p>
                                            <p>Toelichting: {getFeedback(entityIndex, elementIndex)}</p>
                                            <br/>
                                        </div>
                                    );
                                })
                            }
                            <br/>
                        </div>
                    );
                })
            } className='result-fragment__answer-card'/>
        </div>
    )
}

export default ResultFragment;
