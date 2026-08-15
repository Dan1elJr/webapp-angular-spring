package com.sandaniel.rest.webservices.entity;

import org.springframework.stereotype.Service;

@Service
public class HelloWorldBean {
	
	private String message;
	
	public HelloWorldBean() {
	}

	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorld, " + getMessage();
	}

}
