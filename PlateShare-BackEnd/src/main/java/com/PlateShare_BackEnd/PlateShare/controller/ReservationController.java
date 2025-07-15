package com.PlateShare_BackEnd.PlateShare.controller;

import com.PlateShare_BackEnd.PlateShare.dto.ReservationRequestDTO;
import com.PlateShare_BackEnd.PlateShare.dto.ReservationResponseDTO;
import com.PlateShare_BackEnd.PlateShare.service.ReservationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PreAuthorize("hasAuthority('DEMANDEUR')")
    @PostMapping("/create")
   public ResponseEntity<ReservationResponseDTO> createReservation(@Valid @RequestBody ReservationRequestDTO reservationRequestDTO){
       ReservationResponseDTO createdReservation = reservationService.createReservation(reservationRequestDTO);
        return new ResponseEntity<>(createdReservation, HttpStatus.CREATED);
    }

    @PreAuthorize("hasAuthority('DEMANDEUR')")
    @GetMapping
    List<ReservationResponseDTO> getMyReservations(){
        return reservationService.getMyReservations();
    }

    @PreAuthorize("hasAuthority('DEMANDEUR')")
    @PutMapping("/cancel/{id}")
    ResponseEntity<Void> cancelReservation(@PathVariable Long id){
        reservationService.cancelReservation(id);
        return ResponseEntity.ok().build();
    }


}
