package com.PlateShare_BackEnd.PlateShare.repository;

import com.PlateShare_BackEnd.PlateShare.model.Surplus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurplusRepository extends JpaRepository<Surplus,Long> {
}
