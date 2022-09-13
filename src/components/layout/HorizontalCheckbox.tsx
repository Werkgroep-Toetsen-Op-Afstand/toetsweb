import React, { FunctionComponent } from 'react';
import {ScanCardContext} from "../../contexts/ScanCardContext";

interface Props {
    position: number;
    rowText: string;
}

const HorizontalCheckbox: FunctionComponent<Props> = ({position, rowText}) => {
    const {checkedPositie, setCheckedPositie, checkedAmbitie, setCheckedAmbitie} = React.useContext(ScanCardContext);

    return (
        <div className='hor-check'>
            <div className='hor-check__container'>
                <input
                    className='hor-check__checkbox'
                    name="a"
                    checked={checkedPositie === position}
                    onChange={setCheckedPositie ? () => setCheckedPositie(position) : () => {}}
                    type="checkbox"
                />
            </div>
            <div className='hor-check__container hor-check--blue-bg'>
                <input
                    className='hor-check__checkbox'
                    name="b"
                    checked={checkedAmbitie === position}
                    onChange={setCheckedAmbitie ? () => setCheckedAmbitie(position) : () => {}}
                    type="checkbox"
                />
            </div>
            <p>{rowText}</p>
        </div>
    )
}

export default HorizontalCheckbox;