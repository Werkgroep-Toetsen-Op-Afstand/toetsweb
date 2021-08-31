import React, {FunctionComponent, createContext, useContext, useState, useEffect} from 'react';
import User from '../networking/models/User';
import {TokenService, useAbortController} from 'react-ts-boiler';
import AuthRepository from '../networking/repos/AuthRepository';

interface AuthContext {
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);
export const useAuth = () => useContext(AuthContext);

interface Props {
    children: any;
}

const AuthContextProvider: FunctionComponent<Props> = ({ children }) => {
    const [user, setUser] = useState<User>();
    const [loaded, setLoaded] = useState<boolean>(false);

    const [abortController, abortRequests] = useAbortController();

    useEffect(() => {
        return abortRequests;
    }, []);

    const authRepo = new AuthRepository().setAbortController(abortController);

    useEffect(() => {
        getLoggedInUser().then((user) => {
            setUser(user);
            setLoaded(true);
        }).catch(() => {
            TokenService.removeToken();
        });
    }, []);

    const getLoggedInUser = (): Promise<User> => { // TODO: replace with custom API logic
        return authRepo.getCurrentUser();
    };

    const isAuthenticated = (): boolean => user !== undefined;

    if(!loaded) {
        return null; // TODO: replace with element placeholder
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: isAuthenticated() }}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

