package com.PlateShare_BackEnd.PlateShare.service;

import com.PlateShare_BackEnd.PlateShare.dto.DashboardStatsDTO;
import com.PlateShare_BackEnd.PlateShare.enums.Statut;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import com.PlateShare_BackEnd.PlateShare.repository.ReservationRepository;
import com.PlateShare_BackEnd.PlateShare.repository.SurplusRepository;
import com.PlateShare_BackEnd.PlateShare.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.security.Security;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final UtilisateurRepository utilisateurRepository;
    private final SurplusRepository surplusRepository;
    private final ReservationRepository reservationRepository;

    // donateur dashboad
    public DashboardStatsDTO getDonateurDashboard(){

        Utilisateur user = getUser();

        long activeListings = surplusRepository.countByDonateurId(user.getId());
        long pendingReservations = reservationRepository.countBySurplusDonateurIdAndStatut(user.getId(), Statut.EN_ATTENTE_DE_COLLECTE);
        long totalDoneted = reservationRepository.countBySurplusDonateurIdAndStatut(user.getId(), Statut.TERMINEE);

        return new DashboardStatsDTO(activeListings,pendingReservations,totalDoneted,null,null,null,null,null,null);
    }


    private Utilisateur getUser(){
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        return utilisateurRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("userr not found"));
    }
}
