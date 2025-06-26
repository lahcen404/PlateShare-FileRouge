import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth/AuthService';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {Footer} from '../../../shared/components/footer/footer';
import {Navbar} from '../../../shared/components/navbar/navbar';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf,
    Footer,
    Navbar
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginForm: FormGroup;
loginError:string | null = null;

constructor(
  private fb:FormBuilder,
  private auth: AuthService,
  private router: Router){
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    motDePasse : ['',[Validators.required, Validators.minLength(6)]]
  });
}

onSubmit(): void{
  this.loginError=null; // clear previous error
  if (this.loginForm.invalid){
    return;
  }

  const{email,motDePasse} = this.loginForm.value;

  this.auth.login(this.loginForm.value).subscribe({
    next:(res) => {
      this.auth.saveAuth(res);

      if (this.auth.getRole()== "ADMIN"){
        this.router.navigate(['/admin-dashboard']);
      }else if (this.auth.getRole()=="DEMANDEUR") {
        this.router.navigate(['/demandeur-dashboard']);
      }else if(this.auth.getRole()=="DONATEUR"){
        this.router.navigate(['/donateur-dashboard']);

      }

      console.log("Logiin dooone")
      this.auth.saveToken(res.token);
      console.log('Token howa : ', res.token);

    },
    error: (err) => {
      console.error('Login failed', err);
      this.loginError = 'Invalid email or password. Please try again.';
    },
  });

}
  get emailError(): string {
    const emailCtrl = this.loginForm.get('email');
    if (emailCtrl?.hasError('required')) return 'Email is required';
    if (emailCtrl?.hasError('email')) return 'Invalid email address';
    return '';
  }

}
