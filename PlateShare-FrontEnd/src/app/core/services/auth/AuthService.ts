import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthResponse} from '../../models/AuthResponse';
import {LoginRequest} from '../../models/LoginRequest';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl='http://localhost:8080/api/auth';
  private TOKEN_KEY = 'auth-token';
  constructor(private http:HttpClient) { }


  // Register
  register(data: FormGroup):Observable<AuthResponse>{
    return  this.http.post<AuthResponse>(`${this.apiUrl}/register`, data);
  }

  //Login
  login(data:LoginRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data);
  }


  saveAuth(res: AuthResponse) {
    console.log('Saved role:', res.role);
    this.saveToken(res.token);
    localStorage.setItem('role', res.role);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRole(): 'ADMIN' | 'DONATEUR' | "DEMANDEUR" | null {
    return localStorage.getItem('role') as 'ADMIN' | 'DONATEUR' | "DEMANDEUR"|  null;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('role');
  }


  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
