import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BasicAuthenticationService {

    private readonly apiBaseUrl = `http://${window.location.hostname}:8080/api`;
    private isLoggedIn = signal(this.hasAuthenticatedUser());

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
            tap(() => {
                this.setAuthenticatedUser(username, basicAuthHeaderString);
                this.isLoggedIn.set(true);
            })
        );
    }


    logout(){
        this.removeAuthenticatedUser();
        this.isLoggedIn.set(false);
    }



    getAuthenticatedToken(): string | null {
        if (!this.canUseSessionStorage()) {
            return null;
        }

        return sessionStorage.getItem('token');
     
    }

    getAuthenticatedUser(): string | null {
        if (!this.canUseSessionStorage()) {
            return null;
        }

        return sessionStorage.getItem('authenticatedUser');
    }

    isUserLoggedIn(): boolean {
       return this.isLoggedIn();
        
    }

    get loggedIn(): boolean {
        return this.isUserLoggedIn();
    }

    private hasAuthenticatedUser(): boolean {
        return this.getAuthenticatedUser() !== null;
    }

    private setAuthenticatedUser(username: string, token: string): void {
        if (this.canUseSessionStorage()) {
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('token', token);
        }
    }

    private removeAuthenticatedUser(): void {
        if (this.canUseSessionStorage()) {
            sessionStorage.removeItem('authenticatedUser');
            sessionStorage.removeItem('token');
        }
    }

    private canUseSessionStorage(): boolean {
        return typeof sessionStorage !== 'undefined';
    }

}

export class AuthenticationBean {
    constructor(public message: string) {}
}
