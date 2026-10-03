import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BasicAuthenticationService {

    private isLoggedIn = signal(this.hasAuthenticatedUser());
    private readonly apiBaseUrl = `http://${window.location.hostname}:8080/api`;

    constructor(private http: HttpClient) {}


    executeAuthenticationService(username: string, password: string) {

        let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

        let headers = new HttpHeaders({
            Authorization: basicAuthHeaderString
        });

        console.log("Execute Basic Authentication Service");
        return this.http.get<AuthenticationBean>(`${this.apiBaseUrl}/basicauth}`, { headers }
            
        ).pipe(
            map(
                data =>{
                    sessionStorage.setItem('authenticatedUser', username);
                    return data;
                }
            )
        );
    }


    authenticate(username: string, password: string) {
        
        if(username === "sandaniel" && password === "san"){
            this.setAuthenticatedUser(username);
            this.isLoggedIn.set(true);
           
            return true;
        }
        return false;
        
    }

    logout(){
        this.removeAuthenticatedUser();
        this.isLoggedIn.set(false);
    }

    get loggedIn(): boolean {
        return this.isLoggedIn() || this.hasAuthenticatedUser();
    }

    private hasAuthenticatedUser(): boolean {
        if (!this.canUseSessionStorage()) {
            return false;
        }

        return sessionStorage.getItem('authenticatedUser') !== null;
    }

    private setAuthenticatedUser(username: string): void {
        if (this.canUseSessionStorage()) {
            sessionStorage.setItem('authenticatedUser', username);
        }
    }

    private removeAuthenticatedUser(): void {
        if (this.canUseSessionStorage()) {
            sessionStorage.removeItem('authenticatedUser');
        }
    }

    private canUseSessionStorage(): boolean {
        return typeof sessionStorage !== 'undefined';
    }
}

export class AuthenticationBean {
    constructor(public message: string) {}
}
