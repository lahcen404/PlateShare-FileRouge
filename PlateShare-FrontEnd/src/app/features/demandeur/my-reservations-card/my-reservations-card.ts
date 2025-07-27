import {Component, Input} from '@angular/core';
import {Reservation} from '../../../core/models/reservation';

@Component({
  selector: 'app-my-reservations-card',
  imports: [],
  templateUrl: './my-reservations-card.html',
  styleUrl: './my-reservations-card.css'
})
export class MyReservationsCard {
@Input() reservation! : Reservation;
}
