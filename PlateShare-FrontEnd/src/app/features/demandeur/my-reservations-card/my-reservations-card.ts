import {Component, Input} from '@angular/core';
import {Reservation} from '../../../core/models/reservation';
import {ReservationSurplus} from '../../../core/services/reservation/reservation';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-my-reservations-card',
  imports: [
    NgIf
  ],
  templateUrl: './my-reservations-card.html',
  styleUrl: './my-reservations-card.css'
})
export class MyReservationsCard {
  constructor(private reservationService:ReservationSurplus){}

@Input() reservation! : Reservation;

cancelReservation(id: number){
  if (confirm("Are you sure want to cancel this reservations?")){
    this.reservationService.annulerReservation(id).subscribe(()=>{
      alert('reservation canceled!!');
      console.log("canceled succes !!!");
    })
  }
}

}
