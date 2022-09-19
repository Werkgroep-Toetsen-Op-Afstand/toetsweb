import React, {FunctionComponent} from 'react';
import {ScanCardContext} from "../../contexts/ScanCardContext";

interface Props {
    position: number;
    rowText: string;
}

const HorizontalCheckbox: FunctionComponent<Props> = ({position, rowText}) => {
    const {checkedPositie, handleCheckedPositie, checkedAmbitie, handleCheckedAmbitie} = React.useContext(ScanCardContext);

    if (position === 0) {
        return (
            <div className='hor-check'>
                <div className='hor-check__container'>
                    <p className='hor-check__container__label'>Positie</p>
                </div>
                <div className='hor-check__container hor-check--blue-bg'>
                    <p className='hor-check__container__label'>Ambitie</p>
                </div>
            </div>
        )
    }

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
            <div className='hor-check__container hor-check--blue-bg'>
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