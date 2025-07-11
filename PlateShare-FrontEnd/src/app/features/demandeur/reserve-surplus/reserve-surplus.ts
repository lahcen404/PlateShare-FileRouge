import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AuthService} from '../../../core/services/auth/AuthService';
import {Surplus} from '../../../core/models/surplus';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SurplusService} from '../../../core/services/surplus/surplus';
import {ReservationSurplus} from '../../../core/services/reservation/reservation';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-reserve-surplus',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './reserve-surplus.html',
  styleUrl: './reserve-surplus.css'
})
export class ReserveSurplus implements OnInit {

surplus: Surplus | null = null;

reservationForm! : FormGroup;

isLoading: boolean = true;

error: String | null=null ;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private surplusService: SurplusService,
              private reservationSurplus: ReservationSurplus,
              private cdr: ChangeDetectorRef


  ){}


  ngOnInit(): void {
    // id du surplus
    const idSurplus = this.route.snapshot.paramMap.get('id');

    if (idSurplus) {
      // '+' convertit caractères "5" en nombre 5
      this.surplusService.getSurplusById(+idSurplus).subscribe({
        next: (data) => {
          console.log("daaaata :", data);
          this.surplus = data;
          this.isLoading = false;
          this.createForm();
          this.cdr.detectChanges();

        },

        error: (err) => {
          console.error("Erreur  chargement  details du surplus", err);
          this.isLoading = false;
          this.error = "Impossible de trouver l'article.";
          this.cdr.detectChanges();

        }
      });
    }
    else {
        // id n'est trouvé dans URL
        this.isLoading = false;
        this.error = "Aucun ID ";
      }

  }

  private createForm() {
    if (!this.surplus) return; //null

    this.reservationForm = this.fb.group({
      //  crée un seul champ 'quantite'
      quantite: [
        [
          Validators.required, // obligatoire
          Validators.min(1),
          Validators.max(this.surplus.quantite) //  valeur max = quantity disponible
        ]
      ]
    });
  }

  onSubmit(): void {
    // validation
    if (!this.reservationForm.valid || !this.surplus) {
      return;
    }

    const reservationRequest ={
      surplusId: this.surplus.id,
      quantite: this.reservationForm.value.quantite
    }

    console.log("reservation request :", reservationRequest);


    this.reservationSurplus.createReservation(reservationRequest).subscribe({
      next: (response) => {
        console.log("Reservation created done !", response);
        this.router.navigate(['/demandeur/dashboard']);
      },
      error: (err) => {
        console.error("error creation ", err);
        this.error = "problem creation , try again.";
        this.cdr.detectChanges();

      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }



}
