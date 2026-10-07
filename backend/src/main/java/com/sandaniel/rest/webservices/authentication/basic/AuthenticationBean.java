package com.sandaniel.rest.webservices.authentication.basic;

import org.springframework.stereotype.Service;


@Service
public class AuthenticationBean {

	private String message="";
	
	public AuthenticationBean() {}
	
	public AuthenticationBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "AuthenticationBean [message=" + message + "]";
	}


}
