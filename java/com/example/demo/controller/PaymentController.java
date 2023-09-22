package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.demo.model.Payment;
import com.example.demo.repo.PaymentRepository;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin 
public class PaymentController {
    @Autowired
    private PaymentRepository bookRepository;

    @PostMapping("/post/payment")
    public ResponseEntity<Payment> createBook(@RequestBody Payment book) {
        Payment savedBook = bookRepository.save(book);
        return ResponseEntity.ok(savedBook);
    }

    @GetMapping("/get/payment")
    public ResponseEntity<List<Payment>> getAllBooks() {
        List<Payment> books = bookRepository.findAll();
        return ResponseEntity.ok(books);
    }

    @GetMapping("/get1/payment/{id}")
    public ResponseEntity<Payment> getBookById(@PathVariable Long id) {
        Payment book = bookRepository.findById(id).orElse(null);
        if (book != null) {
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/put/payment/{id}")
    public ResponseEntity<Payment> updateBook(@PathVariable Long id, @RequestBody Payment updatedBook) {
        Payment existingBook = bookRepository.findById(id).orElse(null);
        if (existingBook != null) {
        	existingBook.setCardNumber(updatedBook.getCardNumber());
            existingBook.setCardHolder(updatedBook.getCardHolder());
            existingBook.setExpiryDate(updatedBook.getExpiryDate());
            existingBook.setCvv(updatedBook.getCvv());
            Payment savedBook = bookRepository.save(existingBook);
            return ResponseEntity.ok(savedBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/payment/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        Payment book = bookRepository.findById(id).orElse(null);
        if (book != null) {
            bookRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
