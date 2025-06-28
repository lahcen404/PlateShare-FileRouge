import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SurplusService} from '../../../core/services/surplus/surplus';
import {AuthService} from '../../../core/services/auth/AuthService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-surplus-update',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './surplus-update.html',
  styleUrl: './surplus-update.css'
})
export class SurplusUpdate implements OnInit{
  surplusForm : FormGroup;
  isEditMode = false;
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
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.surplusId = +idParam;
      this.loadSurplus(this.surplusId)
    }
  }

  loadSurplus(id:number){
    this.surplusService.getSurplusById(id).subscribe(surplus => {
      this.surplusForm.patchValue({
        nom: surplus.nom,
        type: surplus.type,
        quantite: surplus.quantite,
        dateExpiration: surplus.dateExpiration
      })
    })

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
this.surplusService.updateSurplus(this.surplusId, formData).subscribe(() => {
  console.log('Surplus updated successfully!');
    this.router.navigate(['/surplus-list']);
})

  }


}
