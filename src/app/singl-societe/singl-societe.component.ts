import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TraitementSocieteService } from '../services/traitementSociete.service';

@Component({
  selector: 'app-singl-societe',
  templateUrl: './singl-societe.component.html',
  styleUrls: ['./singl-societe.component.scss'],
})
export class SinglSocieteComponent implements OnInit {
  name: string | undefined = 'default Societe';
  statut: string | undefined = 'default Statut';

  constructor(
    private traitementService: TraitementSocieteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.traitementService.getSocieteById(+id)?.nom;
    this.statut = this.traitementService.getSocieteById(+id)?.statut;
  }
}
