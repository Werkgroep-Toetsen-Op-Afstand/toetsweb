import React, {createContext, useState} from 'react';

interface IScanCardContext {
    checkedPositie: number;
    setCheckedPositie: (pos: number) => void;
    checkedAmbitie: number;
    setCheckedAmbitie: (amb: number) => void;
}

export const ScanCardContext = createContext<IScanCardContext>({} as IScanCardContext);

interface Props {
    children: any;
}

export const ScanCardContextProvider = ({children}: Props) => {
    const [checkedPositie, setCheckedPositie] = useState(0);
    const [checkedAmbitie, setCheckedAmbitie] = useState(0);

    return (
        <ScanCardContext.Provider value={{checkedPositie, setCheckedPositie, checkedAmbitie, setCheckedAmbitie}}>
            {children}
        </ScanCardContext.Provider>
    );
}
export default ScanCardContextProvider;