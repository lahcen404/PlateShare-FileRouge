import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../../models/reservation';
import {Observable} from 'rxjs';
import {ReservationRequest} from '../../models/ReservationRequest';

@Injectable({
  providedIn: 'root'
})
export class ReservationSurplus {

  apiUrl = "http://localhost:8084/api/reservations"
  constructor(private httpClient: HttpClient) { }

  createReservation(reservation:ReservationRequest) : Observable<Reservation>{
    return  this.httpClient.post<Reservation>(`${this.apiUrl}/create`,reservation)
  }

  getMyReservations():Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(this.apiUrl);
  }

  annulerReservation(id: number):Observable<void>{
    return this.httpClient.put<void>(`${this.apiUrl}/cancel/${id}`,null)
  }

}
