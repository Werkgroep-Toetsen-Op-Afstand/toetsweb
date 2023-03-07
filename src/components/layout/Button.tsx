import React, {FunctionComponent} from 'react';
import {ClassBuilder} from 'buro-lib-ts';

interface Props {
    children: any;
    baseClass: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: FunctionComponent<Props> = ({children, baseClass, onClick, disabled}) => {

    const getClassName = () => {
        return ClassBuilder.createClass('button')
            .add(`${baseClass}__bg`)
            .addIf('button--disabled', disabled)
            .build();
    };

    const onButtonClick = () => !disabled && onClick();

    return (
        <div className={getClassName()} onClick={onButtonClick}>
            {children}
        </div>
    );
};

export default Button;
