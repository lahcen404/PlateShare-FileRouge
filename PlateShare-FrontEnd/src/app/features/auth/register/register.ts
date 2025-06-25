import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Role} from '../../../core/models/role';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../core/services/auth/AuthService';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {

  registrationForm!: FormGroup;
  RoleEnum = Role;

  constructor(private auth: AuthService,
              private router: Router,
              private fb: FormBuilder,
) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
      role: [Role.DEMANDEUR, [Validators.required]], // default role is Damandeur

      // Donor role fields
      nomRestaurant: [''],
      adresse: ['']
    });

    this.onRoleChange();
  }

  get selectedRole(): Role {
    return this.registrationForm.get('role')?.value;
  }

  onRoleChange(): void {
    this.registrationForm.get('role')?.valueChanges.subscribe(role => {
      const nomRestaurantControl = this.registrationForm.get('nomRestaurant');
      const adresseControl = this.registrationForm.get('adresse');

      if (role === Role.DONATEUR) {
        nomRestaurantControl?.setValidators([Validators.required]);
        adresseControl?.setValidators([Validators.required]);
      } else {
        nomRestaurantControl?.clearValidators();
        adresseControl?.clearValidators();
      }

      nomRestaurantControl?.updateValueAndValidity();
      adresseControl?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    this.auth.register(this.registrationForm.value).subscribe({
      next: (res) => {
        this.auth.saveAuth(res);
        this.router.navigate(['/login']);
        console.log("Register doooone!")
      },
      error: (err) => console.log(err)
    });
}
}
