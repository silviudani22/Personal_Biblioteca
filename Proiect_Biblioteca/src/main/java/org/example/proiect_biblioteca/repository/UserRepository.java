package org.example.proiect_biblioteca.repository;

import org.example.proiect_biblioteca.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}