package com.sandaniel.rest.webservices;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sandaniel.rest.webservices.entity.Todo;

@Service
public class TodoHardCodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter=0;
	
	static {
		todos.add(new Todo(++idCounter,"sandaniel","Learn to play", new Date(), false));
		todos.add(new Todo(++idCounter,"sandaniel","Learn about spring", new Date(), false));
		todos.add(new Todo(++idCounter,"sandaniel","Learn about angular", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save (Todo todo) {
		
		if (todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		
		return todo;
	}
    
    
	
	public Todo deleteById(long id) {
		
		Todo todo = findById(id);
		
		return todos.remove(todo) ? todo : null;
		
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
}
