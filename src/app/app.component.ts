import { Component, OnInit } from '@angular/core';
import { TraitementSocieteService } from './services/traitementSociete.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title: string;
  constructor() {
    this.title = 'SUIVI DES SOCIETES';
  }





}
