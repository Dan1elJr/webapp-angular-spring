import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoData } from '../service/data/todo-data';
import { ActivatedRoute } from '@angular/router';
import { Todo as TodoModel } from '../list-todos/list-todos';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {

  id: number=0;
  todo = signal<TodoModel | null>(null);

  constructor(private todoService: TodoData, private activatedRoute: ActivatedRoute ) {
    
  }  

  ngOnInit() {
    
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todoService.retrieveTodo('sandaniel', this.id).subscribe(
      response => {
        this.todo.set(response);
        
      }
    );
  }  

  

}
