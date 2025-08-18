package com.PlateShare_BackEnd.PlateShare.dto;

import com.PlateShare_BackEnd.PlateShare.enums.Role;

public record AdminUserViewDTO(

        Long id,
        String nom,
        String email,
        String telephone,
        Role role,
        String nomRestaurant,
        String adresse
) {
}
