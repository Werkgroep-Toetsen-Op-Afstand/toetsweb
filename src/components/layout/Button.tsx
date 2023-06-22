import React, {FunctionComponent} from 'react';

interface Props {
    children: any;
    baseClass: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: FunctionComponent<Props> = ({children, baseClass, onClick, disabled}) => {

    const getClassName = () => {
        return `button ${baseClass}__bg ${disabled ? 'button--disabled' : ''}`;
    };

    const onButtonClick = () => !disabled && onClick();

    return (
        <div className={getClassName()} onClick={onButtonClick}>
            {children}
        </div>
    );
};

export default Button;
