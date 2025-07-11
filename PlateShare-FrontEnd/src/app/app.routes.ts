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
import {adminGuard} from './core/guards/admin/admin-guard';
import {donateurGuard} from './core/guards/donateur/donateur-guard';
import {demandeurGuard} from './core/guards/demandeur/demandeur-guard';
import {ReserveSurplus} from './features/demandeur/reserve-surplus/reserve-surplus';

export const routes: Routes = [

  {path:'', component: Home},
  {path: 'home', component: Home },
  {path: 'login' , component : Login},
  {path: 'register', component: Register},
  {path: 'add-surplus', component: AddSurplus,canActivate:[donateurGuard]},
  {path: 'surplus-list', component: SurplusList},
  {path: 'donateur/surplus-list', component: SurplusMylist,canActivate:[donateurGuard]},
  {path: 'surplus/update/:id', component: SurplusUpdate,canActivate:[donateurGuard]},
  {path: 'admin/dashboard', component :AdminDashboard , canActivate:[adminGuard]},
  {path: 'donateur/dashboard', component :DonateurDashboard, canActivate:[donateurGuard]},
  {path: 'demandeur/dashboard', component :DemandeurDashboard, canActivate:[demandeurGuard]},
  {path: 'demandeur/confirm-reservation/:id' , component : ReserveSurplus, canActivate:[demandeurGuard]},


];
