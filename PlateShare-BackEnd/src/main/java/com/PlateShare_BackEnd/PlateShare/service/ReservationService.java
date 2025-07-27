package com.PlateShare_BackEnd.PlateShare.service;

import com.PlateShare_BackEnd.PlateShare.dto.ReservationRequestDTO;
import com.PlateShare_BackEnd.PlateShare.dto.ReservationResponseDTO;

import java.util.List;

public interface ReservationService {
    ReservationResponseDTO createReservation(ReservationRequestDTO reservationRequestDTO);
    List<ReservationResponseDTO> getMyReservations();
    ReservationResponseDTO getReservationById(Long id);
    void cancelReservation(Long ReservationId);
}
