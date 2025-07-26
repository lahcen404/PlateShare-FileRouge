package com.PlateShare_BackEnd.PlateShare.mapper;

import com.PlateShare_BackEnd.PlateShare.dto.RequestSurplus;
import com.PlateShare_BackEnd.PlateShare.dto.ResponseSurplusDTO;
import com.PlateShare_BackEnd.PlateShare.model.Surplus;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper (componentModel = "spring")
public interface SurplusMapper {



    @Mapping(source = "donateur.nom" , target = "nomDonateur")
    @Mapping(source = "donateur.nomRestaurant" , target = "nomRestaurant")
    ResponseSurplusDTO toDto(Surplus surplus);

       Surplus toEntity(RequestSurplus requestSurplus);

}
