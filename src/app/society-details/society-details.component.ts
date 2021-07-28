import { Component, OnInit } from '@angular/core';
import { Society } from '../model/society.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocieteService } from '../services/societe.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-society-details',
  templateUrl: './society-details.component.html',
  styleUrls: ['./society-details.component.scss'],
})
export class SocietyDetailsComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute,private SocieServ: SocieteService) {}


  id = this.actRoute.snapshot.params['id'];

  public Societe = new Society();
  public submitted: boolean;

  SocieteData = new Array<Society>();

  ngOnInit(): void {

    this.getSelectedSocietyById();

  }


  getSelectedSocietyById() {

    this.SocieServ.getSelectedSociety(this.id).subscribe((response) => {
      this.FormatDate(response.dateContact)
      this.Societe = response;
      

    }),
      (err: HttpErrorResponse) => {
        console.log('An error occured', err.error.message);
      };




  }


  FormatDate(iDate: string) {
    var inputDate = new Date(iDate);
    var formattedDate = inputDate.getFullYear()+'-'+ inputDate.getMonth() +'-'+inputDate.getDate()
    return formattedDate;
  }


  //mise a jour des données du formulaire
  updateSociety() {}
}
