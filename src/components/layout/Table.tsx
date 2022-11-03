import React, {FunctionComponent} from "react";

interface Props {
    tableTitle: string
    data: Array<any>
}

const Table: FunctionComponent<Props> = ({tableTitle, data}) => {

    return (
        <div>
            <h2 className='table__title'>{tableTitle}</h2>
            <table className='table'>
                <tbody>
                {
                    data.map((row: any, index: number) => {
                        return (
                            <tr key={index} className={`table__row ${index === 0 ? 'table__first-row' : ''}`}>
                                {
                                    row.map((cell: any, index: number) => {
                                        return (
                                            <td key={index} className='table__cell'>{cell}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table;