package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.demo.model.Recharge;

import com.example.demo.repo.RechargeRepository;


@RestController
@RequestMapping("/api/bill")
@CrossOrigin 
public class RechargeController {
    @Autowired
    private RechargeRepository billRepository;

    @PostMapping("/post/recharge")
    public ResponseEntity<Recharge> createBook(@RequestBody Recharge book) {
    	Recharge savedBook = billRepository.save(book);
        return ResponseEntity.ok(savedBook);
    }

    @GetMapping("/get/recharge")
    public ResponseEntity<List<Recharge>> getAllBooks() {
        List<Recharge> books = billRepository.findAll();
        return ResponseEntity.ok(books);
    }

    @GetMapping("/get1/recharge/{id}")
    public ResponseEntity<Recharge> getBookById(@PathVariable Long id) {
    	Recharge book = billRepository.findById(id).orElse(null);
        if (book != null) {
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/put/recharge/{id}")
    public ResponseEntity<Recharge> updateBook(@PathVariable Long id, @RequestBody Recharge updatedBook) {
    	Recharge existingBook = billRepository.findById(id).orElse(null);
        if (existingBook != null) {
        	existingBook.setMobileNumber(updatedBook.getMobileNumber());
            existingBook.setAmount(updatedBook.getAmount());
            existingBook.setDate(updatedBook.getDate());
            Recharge savedBook = billRepository.save(existingBook);
            return ResponseEntity.ok(savedBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/recharge/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
    	Recharge book = billRepository.findById(id).orElse(null);
        if (book != null) {
            billRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

