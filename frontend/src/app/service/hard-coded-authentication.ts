import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HardCodedAuthentication {

    private isLoggedIn = signal(this.hasAuthenticatedUser());

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
