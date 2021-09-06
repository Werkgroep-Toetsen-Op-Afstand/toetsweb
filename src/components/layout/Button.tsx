import React, { FunctionComponent } from 'react';
import {ClassBuilder, useTheme} from 'react-ts-boiler';

interface Props {
    children: any;
    onClick: () => void;

    disabled?: boolean;
}

const Button: FunctionComponent<Props> = ({ children, onClick, disabled }) => {
    const { theme } = useTheme();

    const getClassName = () => {
        return ClassBuilder.createClass('button')
            .add(`button--${theme.modifier}`)
            .addIf('button--disabled', disabled)
            .build();
    };

    const onButtonClick = () => !disabled && onClick();

    return (
        <div className={getClassName()} onClick={onButtonClick}>
            { children }
        </div>
    );
};

export default Button;
