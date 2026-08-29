import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
  message="hello";
 
}
