import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';

import { Dependentes } from './dependentes.model';
import { Resposta } from './resposta.model';
import { HostService } from '../../host.service'
@Injectable()
export class DependentesService {
  url = "http://localhost:8080/api/dependentes/getall"

  constructor(public hostService: HostService) {

  }

  getAllDependentes(id: number, callback: Function) {
    this.hostService.defaultGet("dependentes/getall", { funcionario: id }, callback);
  }
  add(data: any, callback: Function) {
    this.hostService.defaultPost("dependentes/save", data, callback);

  }
  delete(data, callback: Function) {
    this.hostService.defaultPost("dependentes/delete", data, callback);

  }
  getDataTable(data) {
    console.log(data);

    let result = data.result.map(item => item.nome);
    console.log(result);
    return result;

  }


}
