import { Component, OnInit } from '@angular/core';
import { SocieteService } from '../services/societe.service';
import { SocietyInfo } from '../SocietyInfo';




@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.scss']
})
export class SocietyComponent implements OnInit {


    public ListeSociety: SocietyInfo[];

    displayedColumns: string[] = ['id', 'NOM', 'LIEU', 'Reponse-Email','Entretien-RH','Entretien-Tech','statut','dateContact','PersonneContact'];
    public datasource: any;
  private ELEMENT_DATA: SocietyInfo[];


  constructor(private SocService: SocieteService) { }

  ngOnInit(): void {

    // this.ListeSociety = this.getData();
    this.ELEMENT_DATA = this.getData();
    this.datasource = this.ELEMENT_DATA;
    this.displayedColumns;
  }



// recupere les données
   getData() {

    return [
      {
            id: Date.now(),
            nom: "SOPRA STERIA",
            lieu: "Luxembourg",
            reponseEmail: "oui",
            entretienRH: "realise",
            entretienTech: "realisé",
            statut: "En cours",
            dateContact: "juillet",
            PersonneContact: "Valentin ALIZON",
       },
      {
        id: Date.now()+1,
         nom: "CTG",
         lieu: "Luxembourg",
         reponseEmail: "oui",
         entretienRH: "realise",
         entretienTech: "realisé",
         statut: "en cours",
         dateContact: "courant juillet",
         PersonneContact: "Thibault Monin"

      }

   ]


  }




}


