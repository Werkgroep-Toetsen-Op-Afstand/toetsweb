import React, { FunctionComponent } from 'react';
import {ClassBuilder, useTheme} from 'react-ts-boiler';

interface Props {
    children: any;
    className?: string;
}

const Card: FunctionComponent<Props> = ({ children, className }) => {
    const { theme } = useTheme();

    const getClassName = () => {
        return ClassBuilder.createClass('card')
            .add(`card--${theme.modifier}`)
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
