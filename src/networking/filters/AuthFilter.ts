import {HttpFilter, NextFilter, TokenService} from 'react-ts-boiler';
import {RequestConfig} from 'react-ts-boiler/lib/networking/filter/HttpFilter';

class AuthFilter implements HttpFilter {

    filter(request: RequestConfig, next: NextFilter): RequestConfig {
        const headers = request.headers ?? {};

        if(TokenService.isAuthenticated()) {
            headers.Authorization = `Bearer ${TokenService.getToken()}`;
        }

        request.headers = headers;

        return next(request);
    }
}

export default AuthFilter;
