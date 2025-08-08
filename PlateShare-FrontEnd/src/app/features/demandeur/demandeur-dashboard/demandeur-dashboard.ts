import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../core/services/auth/AuthService';
import {DashboardsService} from '../../../core/services/dashboards/dashboards';
import {DashboardStats} from '../../../core/models/DashboardStats';

@Component({
  selector: 'app-demandeur-dashboard',
  imports: [
    RouterLink
  ],
  templateUrl: './demandeur-dashboard.html',
  styleUrl: './demandeur-dashboard.css'
})
export class DemandeurDashboard implements OnInit{

  stats:DashboardStats | null = null;
  error : string | null=null;


  constructor(private authService: AuthService,
              private router: Router,
              private dashboardsService: DashboardsService,
              private cdr:ChangeDetectorRef){}


  ngOnInit(): void {
    this.getDemandeurStats();
  }

getDemandeurStats():void{
    this.error=null;
    this.dashboardsService.getDemandeurStats().subscribe({
      next:(data)=>{
        this.stats=data;
        console.log("loaded data :",data);
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.log("error in loading data")
      }
    })
}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
