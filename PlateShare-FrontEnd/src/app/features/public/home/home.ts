import { Component } from '@angular/core';
import {Footer} from '../../../shared/components/footer/footer';
import {Navbar} from '../../../shared/components/navbar/navbar';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    Footer,
    Navbar,
    RouterLink

  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
