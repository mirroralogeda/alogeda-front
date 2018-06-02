import { Injectable } from "@angular/core";
import { HostService } from "../../host.service";

@Injectable()
export class GrupoEventosService {
  constructor(private hostService: HostService) {}

  getAllGrupoEventos() {
    this.hostService.defaultGet("grupoeventos", {}, retorno => {
      console.log(retorno);
    });
    // return this.http.get(this.url).map(res => res.json());
  }
}
