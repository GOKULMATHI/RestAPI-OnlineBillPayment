package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.demo.model.Dth;
import com.example.demo.repo.DthRepository;

@RestController
@RequestMapping("/api/dthbill")
@CrossOrigin 
public class DthController {
    @Autowired
    private DthRepository dthRepository;

    @PostMapping("/post/dth")
    public ResponseEntity<Dth> createBook(@RequestBody Dth book) {
    	Dth savedBook = dthRepository.save(book);
        return ResponseEntity.ok(savedBook);
    }

    @GetMapping("/get/dth")
    public ResponseEntity<List<Dth>> getAllBooks() {
        List<Dth> books = dthRepository.findAll();
        return ResponseEntity.ok(books);
    }

    @GetMapping("/get1/dth/{id}")
    public ResponseEntity<Dth> getBookById(@PathVariable Long id) {
    	Dth book = dthRepository.findById(id).orElse(null);
        if (book != null) {
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/put/dth/{id}")
    public ResponseEntity<Dth> updateBook(@PathVariable Long id, @RequestBody Dth updatedBook) {
    	Dth existingBook = dthRepository.findById(id).orElse(null);
        if (existingBook != null) {
        	existingBook.setAccountNumber(updatedBook.getAccountNumber());
            existingBook.setSubscriberName(updatedBook.getSubscriberName());
            existingBook.setAmount(updatedBook.getAmount());
            Dth savedBook = dthRepository.save(existingBook);
            return ResponseEntity.ok(savedBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/dth/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
    	Dth book = dthRepository.findById(id).orElse(null);
        if (book != null) {
        	dthRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}


