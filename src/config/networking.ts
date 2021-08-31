import {NetworkingConfig} from 'react-ts-boiler/lib/networking/Networking';
import {getApiEndpoint} from 'react-ts-boiler';
import AuthFilter from '../networking/filters/AuthFilter';

const networking: NetworkingConfig = {
    baseUrl: getApiEndpoint() ?? '',
    httpFilters: [AuthFilter]
};

export default networking;
