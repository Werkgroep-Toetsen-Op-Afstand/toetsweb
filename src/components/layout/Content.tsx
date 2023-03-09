import React, { FunctionComponent } from 'react';

interface Props {
    children: any;
}

const Content: FunctionComponent<Props> = ({ children }) => {
    
    return (
        <main className={'main'}>
            { children }
        </main>
    );
};

export default Content;
