import { Component, OnInit } from '@angular/core';
import { SocietyInfo } from '../SocietyInfo';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.scss']
})
export class SocietyComponent implements OnInit {


  public ListeSociety: SocietyInfo[];
  private dataSource: [];
  constructor() { }

  ngOnInit(): void {

    this.ListeSociety = this.getData();

  }

  displayedColumns: string[] = ['id', 'nom', 'lieu', 'reponse'];
  getData() {

    return [
      {
        id: Date.now(),
        nom: "SOPRA STERIA",
        lieu: "Luxembourg",
        reponse: true,
        EntretienRH: true,
        EntretienTech: true,
        RetourSociete: "Reste a passé le dernier entretien !",
        dateEmissionCV: "courant juillet",
        statut: "En Cours de negociation"

      },
      {
        id: Date.now()+1,
        nom: "CTG",
        lieu: "Luxembourg",
        reponse: true,
        EntretienRH: true,
        EntretienTech: true,
        RetourSociete: "effectuée",
        dateEmissionCV: "courant juillet",
        statut: "Attente pour entretien Product manager"

        }

    ]


  }
}
