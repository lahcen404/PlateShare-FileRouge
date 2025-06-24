package com.PlateShare_BackEnd.PlateShare.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequestDTO(
        @NotBlank(message = "L'email est requis")
        @Email(message = "Veuillez entrer un email valide")
        String email,

        @NotBlank(message = "Le mot de passe est requis")
        String motDePasse
) {}
