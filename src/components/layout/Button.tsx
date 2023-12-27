import React, {FunctionComponent} from 'react';

interface Props {
    children: any;
    backgroundColor: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: FunctionComponent<Props> = ({children, backgroundColor, onClick, disabled}) => {

    const getClassName = () => {
        return `button nobutton ${disabled ? 'button--disabled' : ''}`;
    };

    const onButtonClick = () => !disabled && onClick();

    return (
        <button className={getClassName()} style={{backgroundColor}} onClick={onButtonClick}>
            {children}
        </button>
    );
};

export default Button;
