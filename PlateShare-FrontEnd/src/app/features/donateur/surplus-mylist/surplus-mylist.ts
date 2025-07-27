import {Component, Input, OnInit} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {Surplus} from "../../../core/models/surplus";
import {SurplusService} from "../../../core/services/surplus/surplus";
import {SurplusCard} from "../surplus-card/surplus-card";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../core/services/auth/AuthService";

@Component({
  selector: 'app-surplus-mylist',
  imports: [
    SurplusCard,
    AsyncPipe,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './surplus-mylist.html',
  styleUrl: './surplus-mylist.css'
})
export class SurplusMylist implements OnInit{
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
