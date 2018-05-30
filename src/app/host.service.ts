import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class HostService {
  host: string = "http://localhost:8080/api/";
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
    console.log(this.host + url);
    axios
      .post(this.host + url, data, {
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
