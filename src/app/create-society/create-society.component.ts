import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { SocieteService } from '../services/societe.service';

@Component({
  selector: 'app-create-society',
  templateUrl: './create-society.component.html',
  styleUrls: ['./create-society.component.scss'],
})
export class CreateSocietyComponent implements OnInit {
  constructor(private SocieServ: SocieteService) {}

  ngOnInit(): void {}

  //ajouter les societes nouvellement créer dans un tableau de Service
  addSociety(form : any) {
    this.SocieServ.addSuiviSociety(form.value);
  }
}
