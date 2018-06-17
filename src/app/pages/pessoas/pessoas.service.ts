import { Injectable } from "@angular/core";
import { HostService } from "../../host.service";

@Injectable()
export class PessoasService {
  constructor(private hostService: HostService) {}
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultGet("pessoas/getall", null, e => {
        console.log(e);
        let valores = e.data.result;
        resolve(valores);
      });
    });
  }
}
