package com.sandaniel.rest.webservices;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebservicesApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(WebservicesApplication.class, args);
		
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("-----------------------Hello World --------------------------------");
		
	}
	
	

}
