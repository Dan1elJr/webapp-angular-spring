import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Service } from '@angular/core';

@Service()
export class HttpIntercepterBasicAuth implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler){
        let username = 'sandaniel';
        let password = 'sandaniel';
        let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

        request = request.clone({
            setHeaders: {
                Authorization: basicAuthHeaderString
            }
        });

        return next.handle(request);
    }
}

        


