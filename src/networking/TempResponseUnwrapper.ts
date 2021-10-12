import {PaginationData, ResponseUnwrapper} from 'react-ts-boiler';

class TempResponseUnwrapper implements ResponseUnwrapper {

    unwrapResponse<T>(data: any): T {
        return data;
    }

    unwrapPaginationResponse<T>(data: any): PaginationData<T> {
        return data;
    }
}

export default TempResponseUnwrapper;
