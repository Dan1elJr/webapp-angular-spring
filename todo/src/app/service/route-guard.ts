import { Service } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HardCodedAuthentication } from './hard-coded-authentication';



@Service()
export class RouteGuard implements CanActivate {

    constructor(private hardCodedAuthentication: HardCodedAuthentication) { 

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
            
        return this.hardCodedAuthentication.loggedIn? true : false;
    }
}
