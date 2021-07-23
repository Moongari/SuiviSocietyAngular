import { Injectable } from '@angular/core';
import { SocietyInfo } from '../SocietyInfo';

@Injectable({
  providedIn: 'root',
})
export class SocieteService {
   tabSociety: string[] ;
  constructor() {}

  //permet de sauvegarder les données dans un array en vue d'une base de données.

  addSuiviSociety(soc : any) {
    Array.from(soc);
    console.log(soc);

  }

}
