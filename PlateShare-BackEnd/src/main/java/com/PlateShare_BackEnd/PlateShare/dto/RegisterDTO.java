package com.PlateShare_BackEnd.PlateShare.dto;

import com.PlateShare_BackEnd.PlateShare.enums.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record RegisterDTO(
        @NotBlank(message = "Nom complet est requis")
        String nom,

        @NotBlank(message = "Email est requis")
        @Email(message = "Entrer un email valide")
        String email,

        @NotBlank(message = "Numero de telephone est requis")
        String telephone,

        @NotBlank(message = "Mot de passe est requis")
        @Size(min = 6, message = "Mot de passe doit contenir au moins 6 caractères")
        String motDePasse,

        @NotNull(message = "Rôle est requis")
        Role role,

        // for DONOR role
        String nomRestaurant,
        String adresse
) {}

