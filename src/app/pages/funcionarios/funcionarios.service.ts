import { Injectable } from "@angular/core";
import { HostService } from "../../host.service";

@Injectable()
export class FuncionarioService {
  constructor(private hostService: HostService) {}
  getData(nome:string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultGet("funcionarios/getall", {nome:nome}, e => {
        console.log(e);
        let valores = e.data.result;
        resolve(valores);
      });
    });
  }
}
