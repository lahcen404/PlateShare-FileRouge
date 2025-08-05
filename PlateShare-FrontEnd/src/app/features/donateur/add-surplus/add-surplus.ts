import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth/AuthService';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SurplusService} from '../../../core/services/surplus/surplus';

@Component({
  selector: 'app-add-surplus',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './add-surplus.html',
  standalone: true,
  styleUrl: './add-surplus.css'
})
export class AddSurplus implements OnInit{
surplusForm : FormGroup;
surplusId! : number;

  constructor(
    private fb:FormBuilder,
    private surplusService: SurplusService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
    this.surplusForm=this.fb.group({
      nom:['',Validators.required],
      type:['',Validators.required],
      quantite:['',Validators.required],
      dateExpiration:['',Validators.required]
    })
  }


  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onSubmit(){

    if (this.surplusForm.invalid) {
      console.log("Form is invalid, submission stopped.");
      return;
    }
const formData= this.surplusForm.value;

this.surplusService.addSurplus(formData).subscribe(()=> {
  console.log("Surplus added !!!");
  this.router.navigate(['/donateur/surplus-list']);
})
  }


}
