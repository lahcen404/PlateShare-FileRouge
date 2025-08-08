import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth/AuthService';
import {Router, RouterLink} from '@angular/router';
import {DashboardStats} from '../../../core/models/DashboardStats';
import {DashboardsService} from '../../../core/services/dashboards/dashboards';

@Component({
  selector: 'app-donateur-dashboard',
  imports: [
    RouterLink
  ],
  templateUrl: './donateur-dashboard.html',
  styleUrl: './donateur-dashboard.css'
})
export class DonateurDashboard implements OnInit{
  stats:DashboardStats | null=null;
  error : string | null=null;

  constructor(private authService: AuthService,
              private router: Router,
              private dashboardsService: DashboardsService,
              private cdr:ChangeDetectorRef){}


  ngOnInit(): void {
    this.getDonateurStats();
  }

  getDonateurStats(): void{

    this.error=null;

    this.dashboardsService.getDonateurStats().subscribe({
      next:(data)=>{
        this.stats=data;
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.log("Error in loading data !!")
      }
    })

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
