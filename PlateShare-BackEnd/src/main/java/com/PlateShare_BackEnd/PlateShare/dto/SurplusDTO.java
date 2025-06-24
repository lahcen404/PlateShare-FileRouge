package com.PlateShare_BackEnd.PlateShare.dto;

import com.PlateShare_BackEnd.PlateShare.enums.TypeFood;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record SurplusDTO(

        Long id,
        String donateurNom,
        String nomRestaurant,

        @NotBlank(message = "Nom d'article est requis")
        String nom,

        @NotNull(message = "Type de nourriture est requis")
        TypeFood type,

        @NotNull(message = "Quantite est requise")
        @Min(value = 1, message = "Quantite doit être  moins 1")
        Integer quantite,

        @NotNull(message = "Date d'expiration est requise")
        @Future(message = "Date d'expiration doit être dans le futur")
        LocalDate dateExpiration
) {
    }

