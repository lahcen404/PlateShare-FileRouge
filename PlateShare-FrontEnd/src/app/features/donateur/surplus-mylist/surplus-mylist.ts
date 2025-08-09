import {Component, Input, OnInit} from '@angular/core';
import {Surplus} from "../../../core/models/surplus";
import {SurplusService} from "../../../core/services/surplus/surplus";
import {SurplusCard} from "../surplus-card/surplus-card";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../core/services/auth/AuthService";
import {TypeFood} from '../../../core/models/typeFood';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-surplus-mylist',
  imports: [
    SurplusCard,
    NgIf,
    NgForOf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './surplus-mylist.html',
  styleUrl: './surplus-mylist.css'
})
export class SurplusMylist implements OnInit{
  surplus: Surplus[] = [];
  filtredSurplus: Surplus[] = [];
  public TypeFoodEnum = TypeFood;
  error: string | null = null;
  loading = false;

  constructor(
    private surplusService: SurplusService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSurplus();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private loadSurplus(): void {
    this.error = null;
    this.loading = true;

    this.surplusService.getAllSurplus().subscribe({
      next: (data) => {
        this.surplus = data;
        console.log("data :",data);

        this.filtredSurplus = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Failed to load surplus data";
        this.loading = false;
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
