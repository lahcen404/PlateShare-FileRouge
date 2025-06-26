import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Surplus} from '../../models/surplus';

@Injectable({
  providedIn: 'root'
})
export class SurplusService {

  apiUrl="http://localhost:8080/api/surplus"
  constructor(private http:HttpClient) { }

  addSurplus(surplus:Surplus): Observable<Surplus>{
    return this.http.post<Surplus>(`${this.apiUrl}/create`,surplus)
  }
}
