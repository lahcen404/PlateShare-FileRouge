import { Component,Input } from '@angular/core';
import {Surplus} from '../../../core/models/surplus';
import {CommonModule, NgIf} from '@angular/common';
import {TypeFood} from '../../../core/models/typeFood';

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

  constructor(){}



}
