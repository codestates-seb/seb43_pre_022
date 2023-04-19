package com.codestates;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class Seb43Pre022Application {

	public static void main(String[] args) {
		SpringApplication.run(Seb43Pre022Application.class, args);
	}

}
