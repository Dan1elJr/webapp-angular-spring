import { Component } from '@angular/core';
import { HardCodedAuthentication } from '../service/hard-coded-authentication';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  constructor(private hardcodedAuthenticationService: HardCodedAuthentication) { 

  }

  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout();
  }
}
