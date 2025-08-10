import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth/AuthService';
import {Router, RouterLink} from '@angular/router';
import {catchError, Observable, of, tap} from 'rxjs';
import {Reservation} from '../../../core/models/reservation';
import {ReservationSurplus} from '../../../core/services/reservation/reservation';
import {MyReservationsCard} from '../my-reservations-card/my-reservations-card';
import {CommonModule, NgForOf} from '@angular/common';
import {Statut} from '../../../core/models/Statut';
import {TypeFood} from '../../../core/models/typeFood';

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

  reservations : Reservation[]=[];
  filtredReservations:Reservation[]=[];

  error: string | null = null;
  public statut = Statut;


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
    this.reservationService.getMyReservations().subscribe({
      next:(data)=> {
        this.reservations=data;
        console.log("data !:",data);
      },
      error:(err)=>{
        console.log("error in loading data !!!");
        console.error(err);
      }
      });
  }

  onFilterChange(event: Event): void{
    const filterValue = (event.target as HTMLSelectElement).value;
    console.log("filter select now is :", filterValue);

    if(filterValue === 'ALL'){
      this.filtredReservations = this.reservations;
    }else{

      this.filtredReservations = this.reservations.filter(
        reservation => reservation.statut === filterValue
      );
    }

  }
}
