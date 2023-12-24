import React, {FunctionComponent, useContext} from "react";
import resultData from "../../assets/data/resultdata.json";
import Card from "./Card";
import {LanguageContext} from "../../utils/contexts/LanguageContext";
import AssignmentModel from "./toetsmodel/AssignmentModel";

interface Props {
    fragmentTitle: string;
    getResult: (entity: number, element: number) => number;
    getFeedback: (entity: number, element: number) => string;
}

const ResultFragment: FunctionComponent<Props> = ({fragmentTitle, getResult, getFeedback}) => {

    const {getScanData, getTranslation} = useContext(LanguageContext);

    const entities = getScanData().entities;

    const getResultData = () => {
        return entities.map((entity, entityIndex) => {
            const subResults = [
                getResult(entityIndex, 0),
                getResult(entityIndex, 1),
                getResult(entityIndex, 2)
            ];

            return getEndResult(subResults.join(''));
        });
    }

    const getEndResult = (results: string) => {
        const phases = resultData.phases;
        let phaseID = 1;
        phases.forEach((phase) => {
            const selectIDs = phase.selectIDs;
            selectIDs.forEach((selectID) => {
                if (results === selectID) {
                    phaseID = parseInt(phase.phaseID);
                }
            });
        });
        return phaseID;
    }

    return (
        <div className='result-fragment'>
            <h1 className='result-fragment__title'>{fragmentTitle}</h1>
            <AssignmentModel results={getResultData()}/>

            {
                entities.map((entity, entityIndex) => {
                    return (
                        <Card key={entityIndex} className='result-fragment__answer-card'>
                            <h3>{entity.name}</h3>
                            {
                                entity.elements.map((element, elementIndex) => {
                                    return (
                                        <div key={elementIndex}>
                                            <h4>{element.name}</h4>
                                            <p>{element.phases[getResult(entityIndex, elementIndex)]}</p>
                                            <p>
                                                {getTranslation("explanation")}: <i>
                                                {getFeedback(entityIndex, elementIndex)}
                                            </i></p>
                                            <br/>
                                        </div>
                                    );
                                })
                            }
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default ResultFragment;
