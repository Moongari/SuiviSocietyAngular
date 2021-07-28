import { Component, Input, OnInit } from '@angular/core';
import { TraitementSocieteService } from '../services/traitementSociete.service';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuth = false;

  constructor(private traitementSoc: TraitementSocieteService) {


   }



  title: string;

  @Input() SocieteName: string;
  @Input() statut: string;
  @Input() note: number;
  @Input() informationComplementaire: string;
  @Input() listeSociete: string;
  @Input() indexOfSociete: number;


  ngOnInit(): void {


  }


  getStatus() {
    return this.statut;
  }

  getColor() {
    if (this.statut === 'EN COURS') {
      return 'black';
    } else if (this.statut === 'STEP 1') {
      return 'blue';
    } else if (this.statut === 'STEP 2') {
      return 'gray'
    }
    return 'red';
  }
  getFont() {
    if (this.statut === 'EN COURS') {
      return "Times New Roman";
    } else {
      return "Arial";
    }

  }

  onEnCours() {
    this.traitementSoc.switchOnENcours(this.indexOfSociete);
  }
  onStepONE() {
    this.traitementSoc.switchOnStep1(this.indexOfSociete);
  }
  onStepTwo() {
    this.traitementSoc.switchOnStep2(this.indexOfSociete);
  }

  onNoStarting() {
    this.traitementSoc.switchOnOFF(this.indexOfSociete);
  }
}
