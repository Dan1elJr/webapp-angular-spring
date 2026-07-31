import { Service } from '@angular/core';

@Service()
export class HardCodedAuthentication {
    authenticate(username: string, password: string) {
        console.log('before ' + this.isUserLoggedIn());
        if(username === "sandaniel" && password === "san"){
            sessionStorage.setItem('authenticatedUser', username);
            console.log('after ' + this.isUserLoggedIn());
            return true;
        }
        return false;
        
    }

    isUserLoggedIn() {
       let user = sessionStorage.getItem('authenticatedUser');
       return !(user === null);
    }
}
