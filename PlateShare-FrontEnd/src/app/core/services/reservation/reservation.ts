import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../../models/reservation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationSurplus {

  apiUrl = "http://localhost:8080/api/reservations"
  constructor(private httpClient: HttpClient) { }

  createReservation(reservation: { surplusId: number; quantite: any }) : Observable<Reservation>{
    return  this.httpClient.post<Reservation>(`${this.apiUrl}/create`,reservation)
  }
}
