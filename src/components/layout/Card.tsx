import React, { FunctionComponent } from 'react';

interface Props {
    children: any;
    className?: string;
}

const Card: FunctionComponent<Props> = ({ children, className }) => {

    const getClassName = () => {
        return `card ${className ? className : ''}`;
    };

    return (
        <div className={getClassName()}>
            { children }
        </div>
    );
};

export default Card;
