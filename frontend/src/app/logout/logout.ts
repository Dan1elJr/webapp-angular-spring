import { Component } from '@angular/core';
import { HardCodedAuthentication } from '../service/hard-coded-authentication';
import { BasicAuthenticationService } from '../service/basic-authentication';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  constructor(private basicAuthenticationService: BasicAuthenticationService) { 

  }

  ngOnInit(): void {
    this.basicAuthenticationService.logout();
  }
}
