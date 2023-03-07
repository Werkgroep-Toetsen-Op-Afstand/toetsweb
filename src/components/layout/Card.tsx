import React, { FunctionComponent } from 'react';
import {ClassBuilder} from 'buro-lib-ts';

interface Props {
    children: any;
    className?: string;
}

const Card: FunctionComponent<Props> = ({ children, className }) => {

    const getClassName = () => {
        return ClassBuilder.createClass('card')
            .addIf(className, className)
            .build();
    };

    return (
        <div className={getClassName()}>
            { children }
        </div>
    );
};

export default Card;
