package com.PlateShare_BackEnd.PlateShare.dto;


import com.PlateShare_BackEnd.PlateShare.enums.Statut;

import java.time.LocalDate;

public record ReservationResponseDTO(
        Long id,
        LocalDate dateReservation,
        int quantite,
        Statut statut,
        String nomSurplus,
        String nomDonateur,
        String nomRestaurant,
        String nomDemandeur
) {
}
