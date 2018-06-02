import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';

import { Atestados } from './atestados.model';
import { Resposta } from './resposta.model';
import { HostService } from '../../host.service'
@Injectable()
export class AtestadosService {
  url = "http://localhost:8080/api/atestados/getall"

  constructor(public hostService: HostService) {

  }

  getAllAtestados(id: number, callback: Function) {
    this.hostService.defaultGet("atestados/getall", { funcionario: id }, callback);
  }
  add(data: any, callback: Function) {
    this.hostService.defaultPost("atestados/save", data, callback);

  }
  delete(data, callback: Function) {
    this.hostService.defaultPost("atestados/delete", data, callback);

  }
  getDataTable(data) {
    console.log(data);

    let result = data.result.map(item => item.nome);
    console.log(result);
    return result;

  }


}
