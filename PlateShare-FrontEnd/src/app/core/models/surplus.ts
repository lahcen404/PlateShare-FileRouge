import {TypeFood} from './typeFood';

export interface Surplus{
  id?:number;
  nom:string;
  type:TypeFood;
  quantite:number;
  dateExpiration:string
}
