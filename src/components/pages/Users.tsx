import React, {FunctionComponent, useEffect, useState} from 'react';
import {Page, useAbortController} from 'react-ts-boiler';
import User from '../../networking/models/User';
import UserRepository from '../../networking/repos/UserRepository';
import UserList from '../user/UserList';

interface Props {}

const Users: FunctionComponent = () => {
    const [users, setUsers] = useState<User[]>([]);

    const [abortController, abortRequests] = useAbortController();

    const userRepo = new UserRepository().setAbortController(abortController);

    useEffect(() => {
        userRepo.all().then((users) => {
            console.log(users);

            setUsers(users);
        });

        return abortRequests;
    }, []);

    return (
        <Page className={'users-page'}>
            <UserList users={users} />
        </Page>
    );
};

export default Users;
