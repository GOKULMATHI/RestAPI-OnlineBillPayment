package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Recharge {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Long mobileNumber;
    private String amount;
    private String date;
	public Recharge() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Recharge(int id, Long mobileNumber, String amount, String date) {
		super();
		this.id = id;
		this.mobileNumber = mobileNumber;
		this.amount = amount;
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Long getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	
	
}
