import { Component , OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardCodedAuthentication } from '../service/hard-coded-authentication';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink,NgIf],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {

    public isUserLogged: boolean = false;

    constructor(public hardcodedAuthenticationService: HardCodedAuthentication) { 
    } 

    ngOnInit(): void {
        this.isUserLogged = this.hardcodedAuthenticationService.isUserLoggedIn();
    }


}
