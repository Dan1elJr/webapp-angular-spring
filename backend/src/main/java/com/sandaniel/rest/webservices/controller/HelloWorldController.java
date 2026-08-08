package com.sandaniel.rest.webservices.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sandaniel.rest.webservices.service.HelloWorldBean;

@RestController
@RequestMapping("/api")
public class HelloWorldController {
	
	private HelloWorldBean helloService;
	
	@Autowired
	public HelloWorldController(HelloWorldBean helloService){
		this.helloService = helloService; 
	}
	
	@GetMapping("/hello/path-variable/{name}")
	public HelloWorldBean sayHello(@PathVariable String name ) {
		
		helloService.setSayHelloWorld("My name is " + name);
		
		return helloService;
	}

}
