import { Injectable } from "@angular/core";
import { HostService } from "../../host.service";
import { Funcionarios } from "../funcionarios/funcionarios.model";

@Injectable()
export class GrupoEventosService {
  constructor(private hostService: HostService) {}

  getAllGrupoEventos(callback: Function) {
    this.hostService.defaultGet("grupoeventos/getall", {}, retorno => {
      callback(retorno.data.result);
    });
  }

  add(grupoeventos: any, callback: Function) {
    this.hostService.defaultPost("grupoeventos/save", grupoeventos, ret => {
      callback(ret);
    });
  }
  delete(entidade: any, callback: Function) {
    this.hostService.defaultPost("grupoeventos/delete", entidade, callback);
  }
}
