import { Routes } from '@angular/router';
import {Home} from './features/public/home/home';
import {Login} from './features/auth/login/login';
import {Register} from './features/auth/register/register';
import {AddSurplus} from './features/donateur/add-surplus/add-surplus';
import {SurplusCard} from './features/donateur/surplus-card/surplus-card';
import {SurplusList} from './features/donateur/surplus-list/surplus-list';

export const routes: Routes = [

  {path:'', component: Home},
  {path: 'home', component: Home },
  {path: 'login' , component : Login},
  {path: 'register', component: Register},
  {path: 'add-surplus', component: AddSurplus},
  {path: 'surplus-list', component: SurplusList}

];
