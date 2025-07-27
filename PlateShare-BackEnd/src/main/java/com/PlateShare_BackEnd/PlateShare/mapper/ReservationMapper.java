package com.PlateShare_BackEnd.PlateShare.mapper;

import com.PlateShare_BackEnd.PlateShare.dto.ReservationRequestDTO;
import com.PlateShare_BackEnd.PlateShare.dto.ReservationResponseDTO;
import com.PlateShare_BackEnd.PlateShare.model.Reservation;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface ReservationMapper {

    @Mapping(source = "surplus.nom",target = "nomSurplus")
    @Mapping(source = "surplus.donateur.nom", target = "nomDonateur")
    @Mapping(source = "surplus.donateur.nomRestaurant", target = "nomRestaurant")
    @Mapping(source = "demandeur.nom", target = "nomDemandeur")

    ReservationResponseDTO toDto (Reservation reservation);
    Reservation toEntity(ReservationRequestDTO reservationRequestDTO);

}
