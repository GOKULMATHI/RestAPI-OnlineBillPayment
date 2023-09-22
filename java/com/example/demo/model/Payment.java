package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Long cardNumber;
    private String cardHolder;
    private String expiryDate;
    private String cvv;
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Payment(int id, Long cardNumber, String cardHolder, String expiryDate, String cvv) {
		super();
		this.id = id;
		this.cardNumber = cardNumber;
		this.cardHolder = cardHolder;
		this.expiryDate = expiryDate;
		this.cvv = cvv;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Long getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(Long cardNumber) {
		this.cardNumber = cardNumber;
	}
	public String getCardHolder() {
		return cardHolder;
	}
	public void setCardHolder(String cardHolder) {
		this.cardHolder = cardHolder;
	}
	public String getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}
	public String getCvv() {
		return cvv;
	}
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	
    
    
    
    
    // Getters and setters
}
