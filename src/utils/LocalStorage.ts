import React from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
    const [value, setValue] = React.useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    React.useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }, [value, setValue]);

    return [value, setValue];
}

export default useLocalStorage;