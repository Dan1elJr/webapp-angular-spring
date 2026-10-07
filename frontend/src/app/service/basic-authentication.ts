import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BasicAuthenticationService {

    private readonly apiBaseUrl = `http://${window.location.hostname}:8080/api`;

    constructor(private http: HttpClient) {}


    executeAuthenticationService(username: string, password: string) {
        console.log("username: " + username+" password: " + password);
        let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

        let headers = new HttpHeaders({
            Authorization: basicAuthHeaderString
        });

        console.log("headers: " + headers.getAll('Authorization'));

        console.log("Execute Basic Authentication Service");
        return this.http.get<AuthenticationBean>(`${this.apiBaseUrl}/basicauth`, { headers }
            
        ).pipe(
            map(
                data =>{
                    sessionStorage.setItem('authenticatedUser', username);
                    sessionStorage.setItem('token', basicAuthHeaderString);
                    return data;
                }
            )
        );
    }


    logout(){
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('token');
        // this.isLoggedIn.set(false);
    }



    getAuthenticatedToken(): string | null {
      
        return sessionStorage.getItem('token');
     
    }

    isUserLoggedIn(): boolean {
        let user = sessionStorage.getItem('authenticatedUser');
        return !(user === null);
    }



}

export class AuthenticationBean {
    constructor(public message: string) {}
}
