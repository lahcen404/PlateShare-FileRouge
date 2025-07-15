import { Component } from '@angular/core';
import {AuthService} from '../../../core/services/auth/AuthService';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-my-reservations',
  imports: [
    RouterLink
  ],
  templateUrl: './my-reservations.html',
  styleUrl: './my-reservations.css'
})
export class MyReservations {
constructor(private authService: AuthService,
            private router: Router){}
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
