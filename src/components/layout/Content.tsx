import React, { FunctionComponent } from 'react';
import NavBar from "../layout/NavBar"

interface Props {
    children: any;
}

const Content: FunctionComponent<Props> = ({ children }) => {
    
    return (
        <main className={'main'}>
            <NavBar/>
            { children }
        </main>
    );
};

export default Content;
