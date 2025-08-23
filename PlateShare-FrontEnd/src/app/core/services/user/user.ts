import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:8084/api/admin"

  constructor(private http: HttpClient) { }

 getAllUsers():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.apiUrl}/users`);
 }



}
