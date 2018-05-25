import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SetoresService {
  url = "http://localhost/api/setores"

  constructor(private http: Http) {

  }

  getAllSetores() {

    return this.http.get(this.url).map(res => res.json());


  }
}
