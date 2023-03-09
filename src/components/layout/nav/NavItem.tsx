import React, { FunctionComponent } from 'react';

interface Props {
    item: string,
    color: string
}

const NavItem: FunctionComponent<Props> = ({item, color}) => {

    return (
        <h4 className={`navlink navlink--${color}`}>{item}</h4>
    );
};

export default NavItem;
