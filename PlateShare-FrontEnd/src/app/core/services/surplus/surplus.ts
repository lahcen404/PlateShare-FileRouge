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

  getAllSurplus(): Observable<Surplus[]>{
    return this.http.get<Surplus[]>(this.apiUrl);
  }

  updateSurplus(id: number , surplus:Surplus): Observable<Surplus>{
    return this.http.put<Surplus>(`${this.apiUrl}/update/${id}`, surplus)
  }

  getSurplusById(id:number):Observable<Surplus>{
    return this.http.get<Surplus>(`${this.apiUrl}/${id}`);
  }

  deleteSurplus(id: number ): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`)
  }

}
