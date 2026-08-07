import { Service } from '@angular/core';
import { signal } from '@angular/core';

@Service()
export class HardCodedAuthentication {

    private isLoggedIn = signal(false);

    authenticate(username: string, password: string) {
        
        if(username === "sandaniel" && password === "san"){
            sessionStorage.setItem('authenticatedUser', username);
            this.isLoggedIn.set(true);
           
            return true;
        }
        return false;
        
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
        this.isLoggedIn.set(false);
    }

    get loggedIn(): boolean {
        return this.isLoggedIn();
    }

}
