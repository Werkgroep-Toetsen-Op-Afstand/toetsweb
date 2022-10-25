import React, {createContext} from 'react';
import useLocalStorage from "../utils/LocalStorage";

interface IScanCardContext {
    checkedPositie: number;
    handleCheckedPositie: (pos: number) => void;
    checkedAmbitie: number;
    handleCheckedAmbitie: (amb: number) => void;
}

export const ScanCardContext = createContext<IScanCardContext>({} as IScanCardContext);

interface Props {
    children: any;
}

export const ScanCardContextProvider = ({children}: Props) => {

    const [checkedPositie, setCheckedPositie] = useLocalStorage('checkedPositie', 0);
    const [checkedAmbitie, setCheckedAmbitie] = useLocalStorage('checkedAmbitie', 0);

    // const [checkedPositie, setCheckedPositie] = useState(0);
    // const [checkedAmbitie, setCheckedAmbitie] = useState(0);

    const handleCheckedPositie = (pos: number) => {
        if (checkedPositie === pos) {
            setCheckedPositie(0);
        } else {
            setCheckedPositie(pos);
        }
    }

    const handleCheckedAmbitie = (amb: number) => {
        if (checkedAmbitie === amb) {
            setCheckedAmbitie(0);
        } else {
            setCheckedAmbitie(amb);
        }
    }

    return (
        <ScanCardContext.Provider value={{checkedPositie, handleCheckedPositie, checkedAmbitie, handleCheckedAmbitie}}>
            {children}
        </ScanCardContext.Provider>
    );
}
export default ScanCardContextProvider;