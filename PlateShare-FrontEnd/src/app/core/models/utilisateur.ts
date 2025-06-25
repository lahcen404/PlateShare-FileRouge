import {Role} from './role';

export interface Utilisateur {
  id?: number;
  nom: string;
  email: string;
  telephone: string;
  role: Role;
  nomRestaurant?: string;
  adresse?: string;
}
