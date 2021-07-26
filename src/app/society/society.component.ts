import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map, catchError, startWith, retry } from 'rxjs/operators';
import { Society } from '../model/society.model';
import { SocieteService } from '../services/societe.service';
import { SocietyInfo } from '../SocietyInfo';
import { AppDataState, DataStateEnum } from '../state/society.state';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.scss'],
})
export class SocietyComponent implements OnInit {
  readonly DataStateEnum = DataStateEnum;
  // je declare desormais un Observable de type AppDataState qui contient une liste de produit
  societyList$: Observable<Society[]> | any;

  allSociety = new Array<Society>();
  isloading = true;
  buttonDisabled: boolean;

  // avec le dollars on definit un objet de type Observable
  // ceci nous permet de gerer autrement l'ecoute de notre objet Observable ald de subscribe

  displayedColumns: string[] = [
    'id',
    'NOM',
    'LIEU',
    'Reponse-Email',
    'Entretien-RH',
    'Entretien-Tech',
    'statut',
    'dateContact',
    'PersonneContact',
  ];

  constructor(private SocService: SocieteService) {}

  ngOnInit(): void {this.buttonDisabled = false;}

  // recupere les données
  getData() {
    return [
      {
        id: Date.now(),
        nom: 'SOPRA STERIA',
        lieu: 'Luxembourg',
        reponseEmail: 'oui',
        entretienRH: 'realise',
        entretienTech: 'realisé',
        statut: 'En cours',
        dateContact: 'juillet',
        PersonneContact: 'Valentin ALIZON',
      },
      {
        id: Date.now() + 1,
        nom: 'CTG',
        lieu: 'Luxembourg',
        reponseEmail: 'oui',
        entretienRH: 'realise',
        entretienTech: 'realisé',
        statut: 'en cours',
        dateContact: 'courant juillet',
        PersonneContact: 'Thibault Monin',
      },
    ];
  }

  // getAllSociety() {
  //   this.societyList$ = this.SocService.getAllSociety().pipe(
  //     retry(3),
  //     map((data) => {
  //       return data;
  //     }),
  //     startWith({ dataState: DataStateEnum.LOADING }),
  //     catchError((err) =>
  //       of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
  //     )
  //   );
  // }

  getAllSociety() {
    this.SocService.getAllSociety().subscribe((response) => {
      this.allSociety = response;
      this.isloading = false;
    }),
      (err: HttpErrorResponse) => {
        console.log('An error occured', err.error.message);
      };
  }

  getSelectedSocietyStatutEncours() {

    this.SocService.getSelectedSocietyStatutEncours().subscribe(

      (data) => { this.allSociety = data; this.isloading = false;},
      (err) => { throw (err.errorMessage); },
      ()=> console.log("completed")

    );






      // this.SocService.getSelectedSocietyStatutEncours().subscribe(
      //   (response) => {
      //     this.allSociety = response;
      //   }
      // ),
      // (err: HttpErrorResponse) => {
      //   console.log('An error occured', err.error.message);
      // };
  }
}
