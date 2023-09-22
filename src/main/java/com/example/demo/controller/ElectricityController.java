package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.demo.model.Electricity;
import com.example.demo.repo.ElectricityRepository;



@RestController
@RequestMapping("/api/electricitybill")
@CrossOrigin 
public class ElectricityController {
    @Autowired
    private ElectricityRepository electricityRepository;

    @PostMapping("/post/electricity")
    public ResponseEntity<Electricity> createBook(@RequestBody Electricity book) {
    	Electricity savedBook = electricityRepository.save(book);
        return ResponseEntity.ok(savedBook);
    }

    @GetMapping("/get/electricity")
    public ResponseEntity<List<Electricity>> getAllBooks() {
        List<Electricity> books = electricityRepository.findAll();
        return ResponseEntity.ok(books);
    }

    @GetMapping("/get1/electricity/{id}")
    public ResponseEntity<Electricity> getBookById(@PathVariable Long id) {
    	Electricity book = electricityRepository.findById(id).orElse(null);
        if (book != null) {
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/put/electricity/{id}")
    public ResponseEntity<Electricity> updateBook(@PathVariable Long id, @RequestBody Electricity updatedBook) {
    	Electricity existingBook = electricityRepository.findById(id).orElse(null);
        if (existingBook != null) {
        	existingBook.setMeterNumber(updatedBook.getMeterNumber());
            existingBook.setAccountHolder(updatedBook.getAccountHolder());
            existingBook.setAmount(updatedBook.getAmount());
            Electricity savedBook = electricityRepository.save(existingBook);
            return ResponseEntity.ok(savedBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/electricity/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
    	Electricity book = electricityRepository.findById(id).orElse(null);
        if (book != null) {
        	electricityRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}



