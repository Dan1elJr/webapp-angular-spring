import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


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

  constructor(private router: Router) {}

  handleLogin() {
    //console.log("Username: " + this.username);

    if(this.username === "sandaniel" && this.password === "san"){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

}
