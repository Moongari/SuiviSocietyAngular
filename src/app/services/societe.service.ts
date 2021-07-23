import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  tabSociety : any[];
  constructor() { }



  addSuiviSociety(soc: any) {
  this.tabSociety = [soc, ...this.tabSociety]
  }
}
