import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink,NgIf],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  message = "some welcome message";
  name='';

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
  }
}
