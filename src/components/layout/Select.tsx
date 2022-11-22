import React from 'react';
import {SelectProps, Select as BoilerSelect, ClassBuilder} from 'buro-lib-ts';

// Select component override to use theming
function Select<T>(props: SelectProps<T, HTMLDivElement>) {
    const className = ClassBuilder.createClass(`boiler-select`)
        .addIf(props.className, props.className !== undefined)
        .build();

    return (
        <BoilerSelect {...props} className={className}>
            { props.children }
        </BoilerSelect>
    );
}

export default Select;
