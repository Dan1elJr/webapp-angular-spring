package com.sandaniel.rest.webservices.controller;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sandaniel.rest.webservices.utils.HelloWorldBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class HelloWorldController {
	
	private HelloWorldBean helloService;
	
	@Autowired
	public HelloWorldController(HelloWorldBean helloService){
		this.helloService = helloService; 
	}
	
	@GetMapping("/hello-world")
	public HelloWorldBean sayHello( ) {
		helloService.setMessage("Hello World");
		
		return helloService;
	}
	
	@GetMapping("/hello-world/{name}")
	public HelloWorldBean sayHello(@PathVariable String name ) {
		
		helloService.setMessage("My name is " + name);
		
		return helloService;
	}

}
