package org.example.proiect_biblioteca.service;

import org.example.proiect_biblioteca.entities.User;
import org.example.proiect_biblioteca.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private  UserRepository userRepository;


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(userDetails.getUsername());
            user.setEmail(userDetails.getEmail());
            user.setPassword(userDetails.getPassword());
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found!"));
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public void registerUser(User user){

        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("User with username already exists!");
        }


        userRepository.save(user);

    }
}