import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HostService } from "../../host.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';


@Injectable()
export class SelecaoService {

  constructor(private hostService: HostService) { }


  getCurriculos(callback) {
    return this.hostService.defaultGet("curriculos/getall", null, res => {
      callback(res);
    });
  }

  getEscolaridades(callback) {
    return this.hostService.defaultGet("escolaridade/getall", null, res => {
      callback(res);
    });
  }

  getArea(callback) {
    return this.hostService.defaultGet("areas_atuacao/getall", null, res => {
      console.log(res);
      callback(res);
    });
  }

  getFormacoes(data, callback) {
    return this.hostService.defaultGet("formacoes/findbycurriculo", { id: data }, res => {
      callback(res);
    });
  }


  getExperiencia(data, callback) {
    return this.hostService.defaultGet("experiencias/findbycurriculo", { id: data }, res => {
      callback(res);
    });
  }


  getCandidato(data, callback) {
    return this.hostService.defaultGet("curriculos/getPessoa", { id: data }, res => {
      callback(res);
    });
  }
}
