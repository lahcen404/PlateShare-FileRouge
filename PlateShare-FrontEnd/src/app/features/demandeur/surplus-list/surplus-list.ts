import {Component, OnInit} from '@angular/core';
import {SurplusCard} from '../../donateur/surplus-card/surplus-card';
import {Surplus} from '../../../core/models/surplus';
import {SurplusService} from '../../../core/services/surplus/surplus';
import {CommonModule, NgForOf} from '@angular/common';
import {catchError, Observable, of, tap} from 'rxjs';
import {AuthService} from '../../../core/services/auth/AuthService';
import {Router, RouterLink} from '@angular/router';
import {TypeFood} from "../../../core/models/typeFood";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-surplus-list',
  standalone: true,

    imports: [

        CommonModule,
        NgForOf,
        SurplusCard,
        RouterLink,
        FormsModule
    ],
  templateUrl: './surplus-list.html',
  styleUrl: './surplus-list.css'
})
export class SurplusList implements OnInit{
  surplus: Surplus[] = [];
  filtredSurplus: Surplus[] = [];
  public TypeFoodEnum = TypeFood;
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

    this.surplusService.getAllSurplus().subscribe({
      next: (data) => {
        this.surplus = data;
        console.log("data :",data);

        this.filtredSurplus = data;
      },
      error: (err) => {
        this.error = "Failed to load surplus data";
        console.error(err);
      }
    });
  }

  onFilterChange(event: Event): void {
    const filterValue = (event.target as HTMLSelectElement).value;
    console.log("filter select now is :", filterValue);
    if (filterValue === 'ALL') {
      this.filtredSurplus = this.surplus;
    } else {
      this.filtredSurplus = this.surplus.filter(
        surplus => surplus.type === filterValue
      );
    }
  }
}
