import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Society } from '../model/society.model';
import { SocieteService } from '../services/societe.service';

@Component({
  selector: 'app-create-society',
  templateUrl: './create-society.component.html',
  styleUrls: ['./create-society.component.scss'],
})
export class CreateSocietyComponent implements OnInit {
  constructor(private SocieServ: SocieteService) {}

  public Society = new Society();
  ngOnInit(): void {}

  @Input() societyDetails = {
    nom: '',
    lieu: '',
    reponseEmail: '',
    entretienRH: '',
    entretienTech: '',
    statut: '',
    dateContact: 'string',
    PersonneContact: '',
  };

  ArrSociety: Array<Society> = [];

  //ajouter les societes nouvellement créer dans un tableau de Service
  public saveSociety() {

   // console.log('valeurs :', JSON.stringify(monForm.value));

    this.SocieServ.CreateSocietyInfo(this.Society).subscribe(data => {
      console.log(data)
    })
  }
}
