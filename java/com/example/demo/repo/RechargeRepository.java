package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Recharge;

public interface RechargeRepository extends JpaRepository<Recharge, Long> {
}
