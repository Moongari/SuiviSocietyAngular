import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Society } from '../model/society.model';
import { SocietyInfo } from '../SocietyInfo';

@Injectable({
  providedIn: 'root',
})
export class SocieteService {
  tabSociety: string[];
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  //permet de sauvegarder les données dans un array en vue d'une base de données.

  addSuiviSociety(soc: any) {
    Array.from(soc);
    console.log(soc);
  }

  getAllSociety(): Observable<Society[]> {
    let host = environment.host;
    return this.httpClient.get<Society[]>(host + '/society');
  }

  getSelectedSociety(id: number): Observable<Society> {
    let host = environment.host;
    const url = `${host}/society/${id}`;
    return this.httpClient.get<Society>(url)
      .pipe(
        retry(1),
        catchError((err) => this.httpError(err))
    )
  }

  getSelectedSocietyStatutEncours(): Observable<Society[]> {
    let host = environment.host;

    return this.httpClient.get<Society[]>(host + '/society?statut=En cours');
  }

  getSociety(id: number): Observable<Society[]> {
    let host = environment.host;
    const url = `${host}/society/${id}`;
    return this.httpClient.get<Society[]>(url);
  }

  //créer une nouvelle societe
  CreateSocietyInfo(societe: Society): Observable<any> {
    let host = environment.host;
    const body = JSON.stringify(societe);
    console.log('Body' + body);
    return this.httpClient.post(host + '/society', body, this.httpOptions).pipe(
      retry(1),
      catchError((err) => this.httpError(err))
    );
  }

  httpError(error: any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

  failureCallback(erreur: any) {
    console.error("L'opération a échoué avec le message : " + erreur);
  }
}
