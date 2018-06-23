import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HostService } from "../../host.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';


@Injectable()
export class CurriculosService {

  constructor(private hostService: HostService) { }

  savePessoa(data, callback) {
    this.hostService.defaultPost("pessoas/save", data, res => {
      callback(res);
    });
  }

  saveCurriculo(data, callback) {
    this.hostService.defaultPost("curriculos/save", data, res => {
      callback(res);
    });
  }

  saveFormacao(data, callback) {
    this.hostService.defaultPost("formacoes/save", data, res => {
      callback(res);
    });
  }

  saveExperiencia(data, callback) {
    this.hostService.defaultPost("experiencias/save", data, res => {
      callback(res);
    });
  }

  getPessoaCpf(data, callback) {
    return this.hostService.defaultGet("pessoas/getbycpf", { cpf: data }, res => {
      callback(res);
    });
  }

  getCurriculo(data, callback) {
    return this.hostService.defaultGet("curriculos/findcompleto", { id: data }, res => {
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

  deleteFormacoes(data, callback) {
    return this.hostService.defaultPost("formacoes/delete", data, res => {
      callback(res);
    });
  }

  deleteExperiencia(data, callback) {
    return this.hostService.defaultPost("experiencias/delete", data, res => {
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
}
