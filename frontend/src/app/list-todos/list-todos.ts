import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TodoData } from '../service/data/todo-data';
import { Router } from '@angular/router';



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
  message = signal<string>('');


  constructor(private  service: TodoData, private router: Router) {}

  ngOnInit() {
   this.refreshTodos();
  }

  refreshTodos() {
    this.service.retrieveAllTodos('sandaniel').subscribe(
      response => {
        console.log(response);
        this.todos.set(response);
      }
    );

  }

  updateTodo(id: number) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
  }  

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`);
    this.service.deleteTodo('sandaniel', id).subscribe(
      response => { console.log(response);
        this.message.set(`Delete of todo ${id} successful!`);
        this.refreshTodos();
      }
    )
  }   

}
