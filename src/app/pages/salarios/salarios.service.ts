import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';

import { Salarios } from './salarios.model';
import { Resposta } from './resposta.model';
import { HostService } from '../../host.service'
@Injectable()
export class SalariosService {
  url = "http://localhost:8080/api/salarios/getall"

  constructor(public hostService: HostService) {

  }

  getAllSalarios(id: number, callback: Function) {
    this.hostService.defaultGet("salarios/getall", { funcionario: id }, callback);
  }
  add(funcionarioId, data: any, callback: Function) {
    this.hostService.defaultPost("salarios/save/"+funcionarioId, data, callback);

  }
  delete(data, callback: Function) {
    this.hostService.defaultPost("salarios/delete", data, callback);

  }
  getDataTable(data) {
    console.log(data);

    let result = data.result.map(item => item.nome);
    console.log(result);
    return result;

  }


}
