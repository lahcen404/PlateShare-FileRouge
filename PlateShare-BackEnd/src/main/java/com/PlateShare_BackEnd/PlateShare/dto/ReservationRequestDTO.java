package com.PlateShare_BackEnd.PlateShare.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;


public record ReservationRequestDTO(

        @NotNull(message = "Quantity is required for a new reservation.")
        @Min(value = 1, message = "Quantity must be at least 1.")
        Integer quantite,

        @NotNull(message = "Surplus ID is required for a new reservation.")
        Long surplusId

) {}
