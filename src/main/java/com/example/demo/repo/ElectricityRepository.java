package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Electricity;

public interface ElectricityRepository extends JpaRepository<Electricity, Long> {
}
