package org.example.proiect_biblioteca.controller;

import org.example.proiect_biblioteca.entities.Book;
import org.example.proiect_biblioteca.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookService bookService;
    @GetMapping
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }
    @PostMapping
    public void createBook(@RequestBody Book book){
        bookService.createBook(book);
    }
    @PutMapping("/{id}")
    public Optional<Book> getBookById(@PathVariable Long id){
        return bookService.getBookById(id);
    }

}
