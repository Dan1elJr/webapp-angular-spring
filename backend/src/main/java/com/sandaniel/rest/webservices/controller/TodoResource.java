package com.sandaniel.rest.webservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sandaniel.rest.webservices.TodoHardCodedService;
import com.sandaniel.rest.webservices.entity.Todo;

@CrossOrigin(origins = {"http://localhost:4200","http://192.168.1.3:4200"})
@RestController
@RequestMapping("/api")
public class TodoResource {
	
	private TodoHardCodedService todoService;
	
	
	@Autowired
	public TodoResource(TodoHardCodedService todoService) {
		this.todoService = todoService;
	}


	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	
}
