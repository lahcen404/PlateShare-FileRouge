package com.PlateShare_BackEnd.PlateShare.repository;

import com.PlateShare_BackEnd.PlateShare.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {
}
