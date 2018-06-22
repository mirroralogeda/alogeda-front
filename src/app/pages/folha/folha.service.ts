import { Injectable } from "@angular/core";
import { HostService } from "../../host.service";
import { FolhaFuncionario, Calculo } from "./folha.model";
import * as _ from 'lodash';

@Injectable()
export class FolhaService {
  constructor(private hostService: HostService) { }

  getCalculos(): Promise<Calculo[]> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultGet("calculos/getcalculos", null, e => {
        let periodos: Calculo[] = e.data.result as Calculo[];

        resolve(_.orderBy(periodos, p => p.perInicial));
      });
    });
  }

  getFolhas(idGrupoCalc: string): Promise<FolhaFuncionario[]> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultPost("calculos/getfolhas", { calculoId: idGrupoCalc }, e => {
        let folhas: FolhaFuncionario[] = e.data.result as FolhaFuncionario[];

        resolve(_.orderBy(folhas, f => f.nome));
      });
    });
  }

}

