import { Component, OnInit } from '@angular/core';
import { TraitementSocieteService } from '../services/traitementSociete.service';

@Component({
  selector: 'app-societe-view',
  templateUrl: './societe-view.component.html',
  styleUrls: ['./societe-view.component.scss']
})
export class SocieteViewComponent implements OnInit {

  constructor(private traitementSociete: TraitementSocieteService) {
    this.AllSociete = this.traitementSociete.AllSociete;
  }

  title = 'PROSPECTION DES ENTREPRISES ET ECHANGES';
  isAuth = true;
  lastUpdate = new Date();
  AllSociete: any[]

  ngOnInit(): void {
    //this.ChangeAuth();


  }

  ChangeAuth() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onVerification() {
    console.log("traiment....all");
    this.traitementSociete.gestionStatutALL();
  }

  onResetStatut() {

    this.traitementSociete.gestionStatutOfALL();
}
}
