package com.PlateShare_BackEnd.PlateShare.dto;

public record DashboardStatsDTO(

        // Donateur
        Long myActiveListings,
        Long MyPendingReservation,
        Long myTotalItemsDonated,

        // Demandeur
        Long myActiveReservations,
        Long myCompletedReservations,
        Long totalAvailableSurplus,

        // Admin
        Long totalDonateurs,
        Long totalDemandeurs,
        Long totalReservations,
        Long totalSurplus
) {
}
