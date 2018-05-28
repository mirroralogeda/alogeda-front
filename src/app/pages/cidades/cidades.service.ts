import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';

import { Cidades } from './cidades.model';
import { Resposta } from './resposta.model';

@Injectable()
export class CidadesService {

  url: string = "http://localhost:8080/api/cidades/getall";

  constructor(private http: Http) { }

  // getAllActors retorna um Observable
  getAllCidades() {
    return this.http.get(this.url).map(res => res.json() );
  }

  getDataTable(data) {
    console.log(data);

    let result = data.result.map(item => item.nome);
    console.log(result);
    return result;

  }

  // Save retorna um Observable
//   save(actor: Actor) {
//     return this.http.post(this.url, actor)
//       .map(res => res.json())
//       .catch(this.handleError);
//   }

//   private handleError(error: any) {
//     return Observable.throw(error);
//   }
}
