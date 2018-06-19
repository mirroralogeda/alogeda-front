import { Injectable } from '@angular/core';
import { HostService } from "../../host.service";
import { Cidades } from './cidades.model';
import { Resposta } from './resposta.model';

@Injectable()
export class CidadesService {
  constructor(private hostService: HostService) {}
  
  getAllCidades(callback: Function) {
    this.hostService.defaultGet("cidades/getall", {}, retorno => {
      callback(retorno.data.result);
    });
  }

  save(cidades: any, callback: Function) {
    this.hostService.defaultPost("cidades/save", cidades, ret => {
      callback(ret);
    });
  }

  delete(cidades: any, callback: Function) {
    console.log(cidades);
    this.hostService.defaultPost("cidades/delete", cidades, callback);
  }

}
