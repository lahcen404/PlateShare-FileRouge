import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {SurplusCard} from "../../donateur/surplus-card/surplus-card";
import {Surplus} from '../../../core/models/surplus';
import {SurplusService} from '../../../core/services/surplus/surplus';
import {AuthService} from '../../../core/services/auth/AuthService';

@Component({
  selector: 'app-surplus-list-admin',
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        RouterLink,
        SurplusCard
    ],
  templateUrl: './surplus-list-admin.html',
  styleUrl: './surplus-list-admin.css'
})
export class SurplusListAdmin implements OnInit{
  surplus: Surplus[] = [];


  error: string | null = null;

  constructor(private surplusService: SurplusService,
              private authService: AuthService,
              private router:Router) {}


  ngOnInit(): void {
    this.loadSurplus();
  }

  private loadSurplus(): void {
    this.error = null;

    this.surplusService.getAllSurplus().subscribe({
      next: (data) => {
        this.surplus = data;
        console.log("data :",data);
        },
      error: (err) => {
        this.error = "Failed to load surplus data";
        console.error(err);
      }
    });
  }




  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
