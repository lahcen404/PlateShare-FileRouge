import {Component, OnInit} from '@angular/core';
import {SurplusCard} from '../../donateur/surplus-card/surplus-card';
import {Surplus} from '../../../core/models/surplus';
import {SurplusService} from '../../../core/services/surplus/surplus';
import {CommonModule, NgForOf} from '@angular/common';
import {catchError, Observable, of, tap} from 'rxjs';
import {AuthService} from '../../../core/services/auth/AuthService';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-surplus-list',
  standalone: true,

  imports: [

    CommonModule,
    NgForOf,
    SurplusCard,
    RouterLink
  ],
  templateUrl: './surplus-list.html',
  styleUrl: './surplus-list.css'
})
export class SurplusList implements OnInit{
  surplus$!: Observable<Surplus[]>;
  error: string | null = null;

  constructor(private surplusService: SurplusService,
              private authService: AuthService,
              private router:Router) {}

  ngOnInit(): void {
    this.loadSurplus();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private loadSurplus(): void {
    this.error = null;

    this.surplus$ = this.surplusService.getAllSurplus().pipe(
      tap(data => console.log("daaata:", data)),

    catchError(err => {
        this.error = "faailed to load surplus data";
        return of([]);
      })
    );
  }
}
