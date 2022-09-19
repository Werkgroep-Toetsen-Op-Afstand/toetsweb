import React, { FunctionComponent } from 'react';
import {ClassBuilder, useTheme} from 'react-ts-boiler';

interface Props {
    children: any;
    backgroundColor: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: FunctionComponent<Props> = ({ children, backgroundColor, onClick, disabled }) => {
    const getClassName = () => {
        return ClassBuilder.createClass('button')
            .addIf('button--disabled', disabled)
            .build();
    };

    const onButtonClick = () => !disabled && onClick();

    return (
        <div className={getClassName()} onClick={onButtonClick} style={{backgroundColor: backgroundColor}}>
            { children }
        </div>
    );
};

export default Button;
