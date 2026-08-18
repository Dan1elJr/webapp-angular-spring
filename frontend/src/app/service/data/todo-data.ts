import {Service } from '@angular/core';
import { Todo } from '../../list-todos/list-todos';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Service()
export class TodoData {

   private http = inject(HttpClient);

    private readonly apiBaseUrl = `http://${window.location.hostname}:8080/api`;

    retrieveAllTodos(username: string) {
            console.log("Execute Todo Bean Service");
            
            return this.http.get<Todo[]>(`${this.apiBaseUrl}/users/${username}/todos`);
    }

}
