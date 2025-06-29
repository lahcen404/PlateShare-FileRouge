import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Surplus} from '../../../core/models/surplus';
import {CommonModule, NgIf} from '@angular/common';
import {TypeFood} from '../../../core/models/typeFood';
import {SurplusService} from '../../../core/services/surplus/surplus';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth/AuthService';

@Component({
  selector: 'app-surplus-card',
  imports: [CommonModule
  ],
  standalone: true,
  templateUrl: './surplus-card.html',
  styleUrl: './surplus-card.css'
})
export class SurplusCard {

  @Input() surplus!: Surplus;
  public TypeFoodEnum = TypeFood;
  @Output() deleted=new EventEmitter<number>();

  constructor(
    private router: Router,
    private surplusService: SurplusService,
    protected authService: AuthService
  ){}

onEdit(surplus:Surplus){
    this.router.navigate(['surplus/update',surplus.id]);
}

onDelete(id:number){
  if (confirm('Are you sure you want to delete this surplus?')) {
  this.surplusService.deleteSurplus(id).subscribe(() =>{
    alert('Surplus Deleteed!!');
    this.deleted.emit(id);
  })
  }
  }
}
