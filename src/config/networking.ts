import {NetworkingConfig} from 'react-ts-boiler/lib/networking/Networking';
import { getApiEndpoint, LaravelResponseUnwrapper } from 'react-ts-boiler';
import AuthFilter from '../networking/filters/AuthFilter';
import TempResponseUnwrapper from '../networking/TempResponseUnwrapper';

const networking: NetworkingConfig = {
    baseUrl: 'https://jsonplaceholder.typicode.com', // Replace with getApiEndpoint()
    httpFilters: [AuthFilter],
    responseUnwrapper: TempResponseUnwrapper // Replace with LaravelResponseUnwrapper or a custom one
};

export default networking;
