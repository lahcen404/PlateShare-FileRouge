package com.PlateShare_BackEnd.PlateShare.mapper;


import com.PlateShare_BackEnd.PlateShare.dto.AdminUserViewDTO;
import com.PlateShare_BackEnd.PlateShare.dto.UtilisateurDTO;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    AdminUserViewDTO toDTO (Utilisateur utilisateur);

    @Mapping(target = "motDePasse", ignore = true)
    Utilisateur toEntity(UtilisateurDTO utilisateurDTO);
}
