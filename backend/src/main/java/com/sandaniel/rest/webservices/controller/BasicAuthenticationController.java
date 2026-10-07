package com.sandaniel.rest.webservices.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sandaniel.rest.webservices.authentication.basic.AuthenticationBean;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class BasicAuthenticationController {

	private AuthenticationBean authenticationService;

	@Autowired
	public BasicAuthenticationController(AuthenticationBean authenticationService){
		this.authenticationService = authenticationService;
	}

	@GetMapping("/basicauth")
	public AuthenticationBean sayHello( ) {
		authenticationService.setMessage("You are authenticated");

		return authenticationService;
	}

}
