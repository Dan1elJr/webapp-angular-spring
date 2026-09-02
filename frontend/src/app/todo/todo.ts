import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoData } from '../service/data/todo-data';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo as TodoModel } from '../list-todos/list-todos';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,DatePipe],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {

  id: number=0;
  todo = signal<TodoModel | null>(null);

  constructor(private todoService: TodoData, private activatedRoute: ActivatedRoute , private router: Router) {
    
  }  

  ngOnInit() {
    
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo.set(new TodoModel(1,'',false,new Date() ));
    this.todoService.retrieveTodo('sandaniel', this.id).subscribe(
      response => {
        this.todo.set(response);
        
      }
    );
  }  


  saveTodo(): void {
    this.todoService.updateTodo('sandaniel', this.id, this.todo()!).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['todos']);
      }
    );
  }


  

}
