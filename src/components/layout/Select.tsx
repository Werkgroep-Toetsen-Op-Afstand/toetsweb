import React, { FunctionComponent } from 'react';
import {SelectProps, useTheme, Select as BoilerSelect, ClassBuilder} from 'react-ts-boiler';

// Select component override to use theming
const Select: FunctionComponent<SelectProps> = (props) => {
    const { theme } = useTheme();

    const className = ClassBuilder.createClass(`boiler-select--${theme.modifier}`)
        .addIf(props.className, props.className !== undefined)
        .build();

    return (
        <BoilerSelect {...props} className={className}>
            { props.children }
        </BoilerSelect>
    );
};

export default Select;
