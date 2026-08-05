import { Service, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardCodedAuthentication } from './hard-coded-authentication';



@Service()
export class RouteGuard implements CanActivate {

    private hardCodedAuthentication = inject(HardCodedAuthentication);
    private router = inject(Router);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
            
        if(this.hardCodedAuthentication.loggedIn){
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
