import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardCodedAuthentication } from '../service/hard-coded-authentication';
import { BasicAuthenticationService } from '../service/basic-authentication';


@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = "";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router: Router, private hardCodedAuthentication: HardCodedAuthentication, private basicAuthentication: BasicAuthenticationService) {}

  handleLogin() {
    //console.log("Username: " + this.username);

    if(this.hardCodedAuthentication.authenticate(this.username, this.password)){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    //console.log("Username: " + this.username);

    this.basicAuthentication.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome',this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
      
  }

}
