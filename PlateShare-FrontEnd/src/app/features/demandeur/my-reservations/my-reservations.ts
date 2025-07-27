import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth/AuthService';
import {Router, RouterLink} from '@angular/router';
import {catchError, Observable, of, tap} from 'rxjs';
import {Reservation} from '../../../core/models/reservation';
import {ReservationSurplus} from '../../../core/services/reservation/reservation';
import {MyReservationsCard} from '../my-reservations-card/my-reservations-card';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-my-reservations',
  imports: [
    RouterLink,
    MyReservationsCard,
    NgForOf,
    CommonModule
  ],
  templateUrl: './my-reservations.html',
  styleUrl: './my-reservations.css'
})
export class MyReservations implements OnInit{

  reservations$! : Observable<Reservation[]>;
  error: string | null = null;

constructor(private authService: AuthService,
            private router: Router,
            private reservationService: ReservationSurplus){}
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.loadMyReservations()
  }

  private loadMyReservations(): void {
    this.error = null;
    this.reservations$ = this.reservationService.getMyReservations().pipe(
      tap(data => console.log("myy reservations data:", data)),
      catchError(err => {
        console.error("Failed to load reservations:", err);
        this.error = "can't load your reservations";
        return of([]); // empty array on error
      })
    );
  }
}
