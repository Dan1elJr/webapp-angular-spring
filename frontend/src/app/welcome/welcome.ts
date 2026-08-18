import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeData } from '../service/data/welcome-data';
import { signal } from '@angular/core';
@Component({
  selector: 'app-welcome',
  imports: [RouterLink,NgIf],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  message : string = "some welcome message";
  welcomeMessageFromService = signal<string>('');
  name : string = '';

  constructor(private route: ActivatedRoute, private welcomeData: WelcomeData) {
    
  }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessageWithParameters() {
    this.welcomeData.executeHelloWorldServiceWhithPathVariable(this.name).subscribe(
      response => this.handleSucessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("Last line of getWelcomeMessage");
  }

  handleSucessfulResponse(response: any) {
    this.welcomeMessageFromService.set(response.message);
    // console.log(response);
     console.log(this.welcomeMessageFromService);
  }

  handleErrorResponse(error: any) {
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
