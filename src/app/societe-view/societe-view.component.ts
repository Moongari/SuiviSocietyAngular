import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TraitementSocieteService } from '../services/traitementSociete.service';

@Component({
  selector: 'app-societe-view',
  templateUrl: './societe-view.component.html',
  styleUrls: ['./societe-view.component.scss']
})
export class SocieteViewComponent implements OnInit {

  societeSubscription: Subscription;
  constructor(private traitementSociete: TraitementSocieteService) {

  }

  title = 'PROSPECTION DES ENTREPRISES ET ECHANGES';
  isAuth = true;
  lastUpdate = new Date();
  AllSociete: any[]

  ngOnInit(): void {
    //this.ChangeAuth();
    //this.AllSociete = this.traitementSociete.AllSociete;
    this.societeSubscription = this.traitementSociete.SocieteSubject.subscribe(
      (ListOFsociete: any[]) => {
        this.AllSociete = ListOFsociete;
      }
    );
    this.traitementSociete.EmitSocieteSubject();

  }

  ChangeAuth() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
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
