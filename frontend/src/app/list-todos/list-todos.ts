import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TodoData } from '../service/data/todo-data';



export class Todo {
    constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {
    }
 
}


@Component({
  selector: 'app-list-todos',
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.html',
  styleUrl: './list-todos.css',
})
export class ListTodos {

  todos = signal<Todo[]>([]);


  constructor(private  service: TodoData) {}

  ngOnInit() {
   this.service.retrieveAllTodos('sandaniel').subscribe(
    response => {
      console.log(response);
      this.todos.set(response);
      
    },

    );
  }

}
