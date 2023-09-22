package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Electricity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Long  meterNumber;
    private String accountHolder;
    private String amount;
    
	public Electricity() {
		super();
	}

	public Electricity(int id, Long meterNumber, String accountHolder, String amount) {
		super();
		this.id = id;
		this.meterNumber = meterNumber;
		this.accountHolder = accountHolder;
		this.amount = amount;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Long getMeterNumber() {
		return meterNumber;
	}

	public void setMeterNumber(Long meterNumber) {
		this.meterNumber = meterNumber;
	}

	public String getAccountHolder() {
		return accountHolder;
	}

	public void setAccountHolder(String accountHolder) {
		this.accountHolder = accountHolder;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}
    
	
    
    
    // Getters and setters
}


