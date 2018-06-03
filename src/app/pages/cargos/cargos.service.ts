import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class CargosService {
  url = "http://localhost:8080/api/"
  token = window.localStorage.getItem("jwt-login");

  httpOptions = {
    headers: new Headers({
      'Authorization': this.token
    })
  };

  constructor(private http: Http) { }

  getAllCargos() {
    return this.http.get(this.url + 'cargos/getall', this.httpOptions).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getAllCbos() {
    return this.http.get(this.url + 'cbo/getall', this.httpOptions).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getAllSetores() {
    return this.http.get(this.url + 'setores/getall', this.httpOptions).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  save(data) {
    data.cbo = +data.cbo;
    data.setores = +data.setores;
    console.log(data);
    return this.http.post(this.url + 'cargos/save', data, this.httpOptions)
    .map(res => res.json())
    .catch(this.handleError);
  }

  delete(data) {
    return this.http.post(this.url + 'cargos/delete', data, this.httpOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }

}
