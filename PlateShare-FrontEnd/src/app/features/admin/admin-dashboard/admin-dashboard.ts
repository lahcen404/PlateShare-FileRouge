import {ChangeDetectorRef, Component, OnInit, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../core/services/auth/AuthService';
import {DashboardStats} from '../../../core/models/DashboardStats';
import {DashboardsService} from '../../../core/services/dashboards/dashboards';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    RouterLink
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit{

  @Output() stats:DashboardStats | null=null;
  error:String | null=null;

  constructor(private authService: AuthService,
              private router: Router,
              private dashboardService:DashboardsService,
              private cdr:ChangeDetectorRef){}





  ngOnInit(): void {
    this.getAdminStats();
  }

  getAdminStats():void{
    this.error=null;

    this.dashboardService.getAdminStats().subscribe({
      next:(data)=>{
        this.stats = data;

        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.log("failed loading data" , err);
        this.error="can't loading data ";
        this.cdr.detectChanges();
      }
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
