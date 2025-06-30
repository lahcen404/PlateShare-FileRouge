import { Component } from '@angular/core';
import {AuthService} from '../../../core/services/auth/AuthService';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-donateur-dashboard',
  imports: [
    RouterLink
  ],
  templateUrl: './donateur-dashboard.html',
  styleUrl: './donateur-dashboard.css'
})
export class DonateurDashboard {
  constructor(private authService: AuthService,
              private router: Router){}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
