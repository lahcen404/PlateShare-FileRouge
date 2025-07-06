package com.PlateShare_BackEnd.PlateShare.mapper;

import com.PlateShare_BackEnd.PlateShare.dto.ReservationRequestDTO;
import com.PlateShare_BackEnd.PlateShare.dto.ReservationResponseDTO;
import com.PlateShare_BackEnd.PlateShare.model.Reservation;
import org.springframework.stereotype.Component;


@Component
public class ReservationMapper {

    public ReservationResponseDTO toDTO(Reservation reservation){
        return new ReservationResponseDTO(
            reservation.getId(),
            reservation.getDateReservation(),
            reservation.getQuantite(),
            reservation.getStatut(),
            reservation.getSurplus().getNom(),
            reservation.getSurplus().getDonateur().getNom(),
            reservation.getSurplus().getDonateur().getNomRestaurant(),
            reservation.getDemandeur().getNom()
        );
    }
}
