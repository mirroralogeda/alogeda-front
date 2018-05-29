import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class HostService {
  host: string = "localhost:8080";
  cabecalho: object = { jwt: window.localStorage.getItem("jwt") };
  constructor() {}
  public defaultGet(url: string, parametros: any, callback: Function) {
    axios
      .get(url, {
        params: parametros,
        headers: this.cabecalho
      })
      .then(resposta => {
        console.log(resposta);
        callback(resposta);
      })
      .catch(error => {
        console.log(error);
      });
  }
  public defaultPost(url: string, data: any, callback: Function) {
    axios
      .post(url, data, {
        headers: this.cabecalho
      })
      .then(resposta => {
        callback(resposta);
        console.log(resposta);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
