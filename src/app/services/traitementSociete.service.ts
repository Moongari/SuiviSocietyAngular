export class TraitementSocieteService {
  AllSociete = [
    {
      nom: 'CTG',
      statut: 'EN COURS',
      information: "EN ATTENTE DE RETOUR d'OFFRE.",
      note: 2
    },
    {
      nom: 'SOPRA-STERIA',
      statut: 'EN COURS',
      information: "EN ATTENTE DE RETOUR d'OFFRE.",
      note: 3
    },
    {
      nom: 'ARHS',
      statut: 'STEP 1',
      information: 'REALISATION DU TEST TECHNIQUE CODING GAME.',
      note: 1
    },
    {
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
  }

  gestionStatutOfALL() {
    for (let soc of this.AllSociete) {
      soc.statut = 'STEP 1';
    }
  }

  switchOnENcours(index: number) {
    this.AllSociete[index].statut = 'EN COURS';
  }
  switchOnStep1(index: number) {
    this.AllSociete[index].statut = 'STEP 1';
  }

 switchOnStep2(index: number) {
    this.AllSociete[index].statut = 'STEP 2';
  }

  switchOnOFF(index: number) {
    this.AllSociete[index].statut = 'NON DEMARRER';
  }
}
