import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {DashboardStats} from "../../models/DashboardStats";

@Injectable({
  providedIn: 'root'
})
export class Dashboards {

  apiUrl = "http://localhost:8080/api/dashboard"

  constructor(private httpClient: HttpClient) { }

  getAdminStats() : Observable<DashboardStats>{
    return this.httpClient.get<DashboardStats>(`${this.apiUrl}/admin`);
  }

  getDonateurStats():Observable<DashboardStats>{
    return this.httpClient.get<DashboardStats>(`${this.apiUrl}/donateur`);
  }

  getDemandeurStats():Observable<DashboardStats>{
    return this.httpClient.get<DashboardStats>(`${this.apiUrl}/demandeur`)
  }

}
