import { ChangeDetectorRef, Component , OnInit,signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardCodedAuthentication } from '../service/hard-coded-authentication';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink,NgIf],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

    constructor(public hardcodedAuthenticationService: HardCodedAuthentication) { 
    } 
}
