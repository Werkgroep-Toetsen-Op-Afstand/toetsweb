import React, {FunctionComponent} from 'react';
import useLocalStorage from "../../utils/LocalStorage";

interface Props {
    checkedPositie: number;
    handleCheckedPositie: (pos: number) => void;
    checkedAmbitie: number;
    handleCheckedAmbitie: (amb: number) => void;
    position: number;
    rowText: string;
    baseClass: string;
}

const HorizontalCheckbox: FunctionComponent<Props> = ({checkedPositie, handleCheckedPositie, checkedAmbitie, handleCheckedAmbitie, position, rowText, baseClass}) => {
    return (
        <div className='hor-check'>
            <div className='hor-check__container'>
                <input
                    className='hor-check__container__checkbox'
                    name="positie"
                    checked={checkedPositie === position}
                    onChange={() => handleCheckedPositie(position)}
                    type="checkbox"
                />
            </div>
            <div className={`hor-check__container ${baseClass}__transparent-bg`}>
                <input
                    className='hor-check__container__checkbox'
                    name="ambitie"
                    checked={checkedAmbitie === position}
                    onChange={() => handleCheckedAmbitie(position)}
                    type="checkbox"
                />
            </div>
            <p className='hor-check__text'>{rowText}</p>
        </div>
    )
}

export default HorizontalCheckbox;