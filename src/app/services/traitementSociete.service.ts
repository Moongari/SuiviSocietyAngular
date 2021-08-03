import { Subject } from "rxjs";

export class TraitementSocieteService {

  SocieteSubject = new Subject<any[]>(); //ceci va permettre de choisir les types d'information que l'on desire emettre


  private AllSociete = [
    {
      id:1,
      nom:'CTG',
      statut: 'EN COURS',
      information: "EN ATTENTE DE RETOUR d'OFFRE.",
      note: 2
    },
    {
      id:2,
      nom: 'SOPRA-STERIA',
      statut: 'EN COURS',
      information: "EN ATTENTE DE RETOUR d'OFFRE.",
      note: 3
    },
    {
      id:3,
      nom: 'ARHS',
      statut: 'STEP 1',
      information: 'REALISATION DU TEST TECHNIQUE CODING GAME.',
      note: 1
    },
    {
      id:4,
      nom: 'ObjectWare',
      statut: 'EN COURS',
      information: 'SOCIETE A MULHOUSE POUR POSTE CHEF DE PROJET',
      note: 3
    },
  ];

  gestionStatutALL() {
    for (let soc of this.AllSociete) {
      soc.statut = 'EN COURS';
    }
    this.EmitSocieteSubject();
  }

  gestionStatutOfALL() {
    for (let soc of this.AllSociete) {
      soc.statut = 'STEP 1';
    }
    this.EmitSocieteSubject();
  }

  switchOnENcours(index: number) {
    this.AllSociete[index].statut = 'EN COURS';
    this.EmitSocieteSubject();
  }
  switchOnStep1(index: number) {
    this.AllSociete[index].statut = 'STEP 1';
    this.EmitSocieteSubject();
  }

 switchOnStep2(index: number) {
   this.AllSociete[index].statut = 'STEP 2';
   this.EmitSocieteSubject();
  }

  switchOnOFF(index: number) {
    this.AllSociete[index].statut = 'NON DEMARRER';
    this.EmitSocieteSubject();
  }

  getSocieteById(id: number) {
    const societe = this.AllSociete.find((societeObject) => { return societeObject.id === id; })
    return societe;
  }



  // il va emettre les informations que l'on desire
  EmitSocieteSubject() {
    this.SocieteSubject.next(this.AllSociete.slice());// on emet une copie de la liste des Societes
}

}
