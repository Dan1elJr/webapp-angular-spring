import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication';



@Injectable({
    providedIn: 'root'
})
export class RouteGuard implements CanActivate {

    private basicAuthenticationService = inject(BasicAuthenticationService);
    private router = inject(Router);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
            
        if(this.basicAuthenticationService.loggedIn){
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
