package com.sandaniel.rest.webservices;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sandaniel.rest.webservices.entity.Todo;

@Service
public class TodoHardCodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter,"sandaniel","Learn to play", new Date(), false));
		todos.add(new Todo(++idCounter,"sandaniel","Learn about spring", new Date(), false));
		todos.add(new Todo(++idCounter,"sandaniel","Learn about angular", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
}
