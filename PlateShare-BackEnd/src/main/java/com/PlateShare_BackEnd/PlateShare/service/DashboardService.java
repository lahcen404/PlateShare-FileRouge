package com.PlateShare_BackEnd.PlateShare.service;

import com.PlateShare_BackEnd.PlateShare.dto.DashboardStatsDTO;
import com.PlateShare_BackEnd.PlateShare.enums.Role;
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

        return new DashboardStatsDTO(activeListings,pendingReservations,totalDoneted,null,null,null,null,null,null,null);
    }

    // demandeur
    public DashboardStatsDTO getDemandeurDashbaord(){

        Utilisateur user = getUser();
        long activeReservations  = reservationRepository.countByDemandeurId(user.getId());
        long completedReservations = reservationRepository.countBySurplusDonateurIdAndStatut(user.getId(), Statut.TERMINEE);
        long totalAvailableSurplus = reservationRepository.count();

        return new DashboardStatsDTO(null,null,null,activeReservations,completedReservations,totalAvailableSurplus,null,null,null,null);
    }


    // admin
    public DashboardStatsDTO getAdminDashboard(){

        Utilisateur user = getUser();

        long totalDonateurs = utilisateurRepository.countByRole(Role.DONATEUR);
        long totalDemandeurs = utilisateurRepository.countByRole(Role.DEMANDEUR);
        long totalReservations = reservationRepository.count();
        long totalSurplus = surplusRepository.count();


        return new DashboardStatsDTO(null,null,null,null,null,null,totalDonateurs,totalDemandeurs,totalReservations,totalSurplus);
    }


    private Utilisateur getUser(){
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        return utilisateurRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("userr not found"));
    }
}
