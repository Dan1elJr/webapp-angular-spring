package com.sandaniel.rest.webservices.service;

import org.springframework.stereotype.Service;

@Service
public class HelloWorldBean {
	
	private String sayHelloWorld;
	
	public HelloWorldBean() {
	}

	public String getSayHelloWorld() {
		return sayHelloWorld;
	}
	
	public void setSayHelloWorld(String message) {
		this.sayHelloWorld = message;
	}

	@Override
	public String toString() {
		return "HelloWorld, " + sayHelloWorld;
	}

}
