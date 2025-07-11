import {Statut} from './Statut';

export interface Reservation{
  id: number;
  dateReservation: string;
  quantite: number;
  statut: Statut;
  nomSurplus: string;
  nomDonateur: string;
  nomRestaurant: string;
  nomDemandeur: string;
}
