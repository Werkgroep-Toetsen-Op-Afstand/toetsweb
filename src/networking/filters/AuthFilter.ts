import {HttpFilter, NextFilter, TokenService} from 'react-ts-boiler';
import {RequestConfig} from 'react-ts-boiler/lib/networking/filter/HttpFilter';

class AuthFilter implements HttpFilter {

    filter(request: RequestConfig, next: NextFilter): RequestConfig {
        if(TokenService.isAuthenticated()) {
            request.headers = {
                Authorization: `Bearer ${TokenService.getToken()}`
            };
        }

        return next(request);
    }
}

export default AuthFilter;
