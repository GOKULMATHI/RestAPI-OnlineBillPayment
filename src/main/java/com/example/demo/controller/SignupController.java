package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

@RestController
@RequestMapping("/api/signup")
@CrossOrigin
public class SignupController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/post/sign")
    public ResponseEntity<?> signup(@Validated @RequestBody User user, BindingResult result) {
        // Validate user input
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMap);
        }

  
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null) {
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("username", "Username already exists");
            return ResponseEntity.badRequest().body(errorMap);
        }

        userRepository.save(user);
        return ResponseEntity.ok("Signup successful");
    }
}