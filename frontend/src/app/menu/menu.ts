import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { BasicAuthenticationService } from '../service/basic-authentication';

@Component({
  selector: 'app-menu',
  imports: [RouterLink,NgIf],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

    constructor(public basicAuthenticationService: BasicAuthenticationService) { 
    } 
}
