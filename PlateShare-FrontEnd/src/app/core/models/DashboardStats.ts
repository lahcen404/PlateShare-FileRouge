export interface DashboardStats{

  // Donateur
    myActiveListings : number;
    myPendingReservation: number;
    myTotalItemsDonated: number;

  // Demandeur
    myActiveReservations: number;
    myCompletedReservations: number;
    totalAvailableSurplus: number;

  // Admin
    totalDonateurs: number;
    totalDemandeurs: number;
    totalReservations: number;
    totalSurplus: number;
}
