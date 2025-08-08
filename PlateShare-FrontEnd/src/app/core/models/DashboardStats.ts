export interface DashboardStats{

  // Donateur
    myActiveListings?: number;
    MyPendingReservation?: number;
    myTotalItemsDelivered?: number;

  // Demandeur
    myActiveReservations?: number;
    myCompletedReservations?: number;
    totalAvailableSurplus?: number;

  // Admin
    totalDonateurs: number;
    totalDemandeurs: number;
    totalReservations: number;
    totalSurplus: number;
}
