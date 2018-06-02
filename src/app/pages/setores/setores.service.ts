import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HostService } from "../../host.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';

import { Setores } from './setores.model';
import { Resposta } from './resposta.model';

@Injectable()
export class SetoresService {
  urlSetores = "http://localhost:8080/api/setores/"
  token = window.localStorage.getItem("jwt-login");

  httpOptions = {
    headers: new Headers({
      'Authorization': this.token
    })
  };

  constructor(private hostService: HostService, private http: Http) { }

  getAllSetores() {
    return this.http.get(this.urlSetores + 'getall', this.httpOptions).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  save(data) {
    return this.http.post(this.urlSetores + 'save', data, this.httpOptions)
    .map(res => res.json())
    .catch(this.handleError);
  }

  delete(data) {
    return this.http.post(this.urlSetores + 'delete', data, this.httpOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }

  // getDataTable(data) {
  //   console.log(data);

  //   let result = data.result.map(item => {
  //     return { nome: item.nome };
  //   });
  //   console.log(result);
  //   return result;

  // }


}
