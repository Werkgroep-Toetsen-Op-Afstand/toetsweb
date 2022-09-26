import React, {FunctionComponent} from 'react';
import {ScanCardContext} from "../../contexts/ScanCardContext";

interface Props {
    position: number;
    rowText: string;
    baseClass: string;
}

const HorizontalCheckbox: FunctionComponent<Props> = ({position, rowText, baseClass}) => {
    const {checkedPositie, handleCheckedPositie, checkedAmbitie, handleCheckedAmbitie} = React.useContext(ScanCardContext);

    return (
        <div className='hor-check'>
            <div className='hor-check__container'>
                <input
                    className='hor-check__container__checkbox'
                    name="a"
                    checked={checkedPositie === position}
                    onChange={() => handleCheckedPositie(position)}
                    type="checkbox"
                />
            </div>
            <div className={`hor-check__container ${baseClass}__transparent-bg`}>
                <input
                    className='hor-check__container__checkbox'
                    name="b"
                    checked={checkedAmbitie === position}
                    onChange={() => handleCheckedAmbitie(position)}
                    type="checkbox"
                />
            </div>
            <p>{rowText}</p>
        </div>
    )
}

export default HorizontalCheckbox;