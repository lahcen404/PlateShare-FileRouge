package com.PlateShare_BackEnd.PlateShare.service.impl;

import com.PlateShare_BackEnd.PlateShare.controller.DemandeurController;
import com.PlateShare_BackEnd.PlateShare.dto.ReservationRequestDTO;
import com.PlateShare_BackEnd.PlateShare.dto.ReservationResponseDTO;
import com.PlateShare_BackEnd.PlateShare.enums.Statut;
import com.PlateShare_BackEnd.PlateShare.mapper.ReservationMapper;
import com.PlateShare_BackEnd.PlateShare.model.Reservation;
import com.PlateShare_BackEnd.PlateShare.model.Surplus;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import com.PlateShare_BackEnd.PlateShare.repository.ReservationRepository;
import com.PlateShare_BackEnd.PlateShare.repository.SurplusRepository;
import com.PlateShare_BackEnd.PlateShare.repository.UtilisateurRepository;
import com.PlateShare_BackEnd.PlateShare.service.ReservationService;
import jakarta.transaction.Transactional;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

        private final ReservationRepository reservationRepository;
        private final SurplusRepository surplusRepository;
        private final UtilisateurRepository utilisateurRepository;
        private final ReservationMapper reservationMapper;

    public ReservationServiceImpl(ReservationRepository reservationRepository, SurplusRepository surplusRepository, UtilisateurRepository utilisateurRepository, ReservationMapper reservationMapper) {
        this.reservationRepository = reservationRepository;
        this.surplusRepository = surplusRepository;
        this.utilisateurRepository = utilisateurRepository;
        this.reservationMapper = reservationMapper;
    }

    @Override
    @Transactional
    public ReservationResponseDTO createReservation(ReservationRequestDTO reservationRequestDTO) {

        // find surplus id
        Surplus surplus = surplusRepository.findById(reservationRequestDTO.surplusId())
                .orElseThrow(() -> new RuntimeException("Surplus id not found"));

        // find demandeur
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        Utilisateur demandeur = utilisateurRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("Demandeur not found"));

        // check quantity if disponible
        if (surplus.getQuantite() < reservationRequestDTO.quantite()){
            throw new RuntimeException("Insufficient quantity ");
        }

        // remove quantity from surplus
        surplus.setQuantite(surplus.getQuantite() - reservationRequestDTO.quantite());
        surplusRepository.save(surplus);

        Reservation reservation = new Reservation();
        reservation.setQuantite(reservationRequestDTO.quantite());
        reservation.setDateReservation(LocalDate.now());
        reservation.setStatut(Statut.EN_ATTENTE_DE_COLLECTE);
        reservation.setDemandeur(demandeur);
        reservation.setSurplus(surplus);

        Reservation savedReservation = reservationRepository.save(reservation);

        return reservationMapper.toDTO(savedReservation);
    }

    @Override
    public List<ReservationResponseDTO> getMyReservations() {
        return List.of();
    }

    @Override
    public void cancelReservation(Long ReservationId) {

    }
}
