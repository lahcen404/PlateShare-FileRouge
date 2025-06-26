import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../core/services/auth/AuthService';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{

  public isUserLoggedIn: boolean = false;

  constructor( protected authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.isUserLoggedIn=this.authService.isLoggedIn();

  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.isUserLoggedIn = false;

  }
}
