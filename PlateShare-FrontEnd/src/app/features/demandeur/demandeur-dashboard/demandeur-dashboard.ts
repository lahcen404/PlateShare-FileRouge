import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../core/services/auth/AuthService';

@Component({
  selector: 'app-demandeur-dashboard',
  imports: [
    RouterLink
  ],
  templateUrl: './demandeur-dashboard.html',
  styleUrl: './demandeur-dashboard.css'
})
export class DemandeurDashboard {

  constructor(private authService: AuthService,
              private router: Router){}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
