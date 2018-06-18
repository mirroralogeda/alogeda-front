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

  getPessoaCpf(data, callback) {
    return this.hostService.defaultGet("pessoas/getbycpf", { cpf: data }, res => {
      callback(res);
    });
  }

  getEscolaridades(callback){
    return this.hostService.defaultGet("escolaridade/getall", null, res => {
      console.log(res);
      callback(res);
    });
  }

}
