import { Routes } from '@angular/router';
import {Home} from './features/public/home/home';
import {Login} from './features/auth/login/login';
import {Register} from './features/auth/register/register';
import {AddSurplus} from './features/donateur/add-surplus/add-surplus';
import {SurplusCard} from './features/donateur/surplus-card/surplus-card';
import {SurplusList} from './features/demandeur/surplus-list/surplus-list';
import {SurplusUpdate} from './features/donateur/surplus-update/surplus-update';
import {SurplusMylist} from './features/donateur/surplus-mylist/surplus-mylist';
import {AdminDashboard} from './features/admin/admin-dashboard/admin-dashboard';
import {DonateurDashboard} from './features/donateur/donateur-dashboard/donateur-dashboard';
import {DemandeurDashboard} from './features/demandeur/demandeur-dashboard/demandeur-dashboard';

export const routes: Routes = [

  {path:'', component: Home},
  {path: 'home', component: Home },
  {path: 'login' , component : Login},
  {path: 'register', component: Register},
  {path: 'add-surplus', component: AddSurplus},
  {path: 'surplus-list', component: SurplusList},
  {path: 'donateur/surplus-list', component: SurplusMylist},
  {path: 'surplus/update/:id', component: SurplusUpdate},
  {path: 'admin/dashboard', component :AdminDashboard},
  {path: 'donateur/dashboard', component :DonateurDashboard},
  {path: 'demandeur/dashboard', component :DemandeurDashboard}


];
