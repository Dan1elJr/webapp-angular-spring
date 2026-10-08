import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication';

@Service()
export class HttpIntercepterBasicAuth implements HttpInterceptor {

    private basicAuthenticationService = inject(BasicAuthenticationService);

   

    intercept(request: HttpRequest<any>, next: HttpHandler){
        let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
        let username = this.basicAuthenticationService.getAuthenticatedUser();
        
        if(basicAuthHeaderString && username){  
            request = request.clone({
                setHeaders: {
                    Authorization: basicAuthHeaderString
                }
            }); 
        }

        return next.handle(request);
    }
}

        


