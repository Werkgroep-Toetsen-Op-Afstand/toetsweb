import React, { FunctionComponent } from 'react';

interface Props {
    titleCheckbox: string;
}

const VerticalCheckbox: FunctionComponent<Props> = ({titleCheckbox}) => {

    const [checked, setChecked] = React.useState(0);

    const handleChange = (id: number) => {
        setChecked((checked) => checked === id ? 0 : id);
    }

    return (
        <div className={`vert-check ${titleCheckbox === "Ambitie" ? "vert-check--blue-bg" : ""}`}>
            <p className={'vert-check__label'}>{titleCheckbox}</p>

            <div className='vert-check__container'>
                <input
                    className='vert-check__container__checkbox'
                    name={titleCheckbox}
                    checked={checked === 1}
                    onChange={() => handleChange(1)}
                    type="checkbox"
                />
            </div>

            <div className='vert-check__container'>
                <input
                    className='vert-check__container__checkbox'
                    name={titleCheckbox}
                    checked={checked === 2}
                    onChange={() => handleChange(2)}
                    type="checkbox"
                />
            </div>

            <div className='vert-check__container'>
                <input
                    className='vert-check__container__checkbox'
                    name={titleCheckbox}
                    checked={checked === 3}
                    onChange={() => handleChange(3)}
                    type="checkbox"
                />
            </div>

            <div className='vert-check__container'>
                <input
                    className='vert-check__container__checkbox'
                    name={titleCheckbox}
                    checked={checked === 4}
                    onChange={() => handleChange(4)}
                    type="checkbox"
                />
            </div>
        </div>
    )
}

export default VerticalCheckbox;