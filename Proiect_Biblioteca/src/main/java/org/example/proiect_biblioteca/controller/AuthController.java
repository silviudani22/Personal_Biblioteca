package org.example.proiect_biblioteca.controller;

import com.sun.net.httpserver.Authenticator;
import org.example.proiect_biblioteca.controller.model.LoginRequest;
import org.example.proiect_biblioteca.entities.User;
import org.example.proiect_biblioteca.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AuthController {
    @Autowired
    private  UserService userService;
    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody User user
    ) {
        try {
            userService.registerUser(user);
            return  ResponseEntity.ok("succes");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid credentials");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<User> user = userService.findByUsername(request.getUsername());

        if (user.isPresent() && user.get().getPassword().equals(request.getPassword())) {
            return  ResponseEntity.ok("Success");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

}
