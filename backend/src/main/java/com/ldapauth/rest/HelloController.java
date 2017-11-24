package com.ldapauth.rest;


import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping(value = "/hello")
    public String sayHello() {
        return String.format("Hello %s", SecurityContextHolder.getContext().getAuthentication().getName());
    }
}
