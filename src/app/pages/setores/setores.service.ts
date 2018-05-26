import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';

import { Setores } from './setores.model';
import { Resposta } from './resposta.model';

@Injectable()
export class SetoresService {
  url = "http://localhost:8080/api/setores/getall"

  constructor(private http: Http) {

  }

  getAllSetores() {
    return this.http.get(this.url).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getDataTable(data) {
    console.log(data);

    let result = data.result.map(item => item.nome);
    console.log(result);
    return result;

  }


}
