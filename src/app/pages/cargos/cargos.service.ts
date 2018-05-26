import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CargosService {
  url = "http://localhost/api/cargos"

  constructor(private http: Http) {

  }

  getAllCargos() {

    return this.http.get(this.url).map(res => res.json());


  }
}
