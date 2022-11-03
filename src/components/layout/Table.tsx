import React, {FunctionComponent} from "react";

interface Props {
    tableTitle: string
    data: Array<any>
}

const Table: FunctionComponent<Props> = ({tableTitle, data}) => {
    return (
        <table className='table'>
            <h2 className='table__title'>{tableTitle}</h2>
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
        </table>
    )
}

export default Table;