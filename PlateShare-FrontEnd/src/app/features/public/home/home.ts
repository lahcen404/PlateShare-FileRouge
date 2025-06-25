import { Component } from '@angular/core';
import {Footer} from '../../../shared/components/footer/footer';
import {Navbar} from '../../../shared/components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [
    Footer,
    Navbar
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
