package com.PlateShare_BackEnd.PlateShare.mapper;


import com.PlateShare_BackEnd.PlateShare.dto.AdminUserViewDTO;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    AdminUserViewDTO toDTO (Utilisateur utilisateur);
}
