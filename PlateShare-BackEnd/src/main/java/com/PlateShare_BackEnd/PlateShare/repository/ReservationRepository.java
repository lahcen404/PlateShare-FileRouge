package com.PlateShare_BackEnd.PlateShare.repository;

import com.PlateShare_BackEnd.PlateShare.enums.Statut;
import com.PlateShare_BackEnd.PlateShare.model.Reservation;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import jdk.jshell.Snippet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    List<Reservation> findByDemandeur(Utilisateur demandeur);
    long countByDemandeurId (Long demandeurId);
    long countBySurplusDonateurIdAndStatut(Long donateurId, Statut statut);

}
