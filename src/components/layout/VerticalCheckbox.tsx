import React, { FunctionComponent } from 'react';

interface Props {
    titleCheckbox: string;
}

const VerticalCheckbox: FunctionComponent<Props> = ({titleCheckbox}) => {

    const [checked, setChecked] = React.useState(0);

    return (
        <div className={`vert-check ${titleCheckbox === "Ambitie" ? "vert-check--blue-bg" : ""}`}>
            <p>{titleCheckbox}</p>

            <div className='vert-check__container'>
                <input
                    className='vert-check__container__checkbox'
                    name={titleCheckbox}
                    checked={checked === 1}
                    onChange={() => setChecked(1)}
                    type="checkbox"
                />
                <span className="vert-check__container__span-checkbox"></span>
            </div>

            <div className='vert-check__container'>
                <input      
                    className='vert-check__container__checkbox'
                    name={titleCheckbox}
                    checked={checked === 2}
                    onChange={() => setChecked(2)}
                    type="checkbox"
                />
                <span className="vert-check__container__span-checkbox"></span>
            </div>

            <div className='vert-check__container'>
                <input
                    className='vert-check__container__checkbox'      
                    name={titleCheckbox}
                    checked={checked === 3}
                    onChange={() => setChecked(3)}
                    type="checkbox"
                />
                <span className="vert-check__container__span-checkbox"></span>
            </div>

            <div className='vert-check__container'>
                <input      
                    className='vert-check__container__checkbox'
                    name={titleCheckbox}
                    checked={checked === 4}
                    onChange={() => setChecked(4)}
                    type="checkbox"
                />
                <span className="vert-check__container__span-checkbox"></span>
            </div>
        </div>
    )
}

export default VerticalCheckbox;