import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class HostService {
  host: string = "http://localhost:8080/api/";
  cabecalho: object = {
    Authorization: window.localStorage.getItem("jwt-login")
  };
  constructor() {}

  private tratamentoErro(error) {
    let erro = error.response;
    console.log(erro)
    if(erro.status >= 500){
      console.log('erro no servidor')
    }
  }

  public defaultGet(url: string, parametros: any, callback: Function) {
    axios
      .get(this.host + url, {
        params: parametros,
        headers: this.cabecalho
      })
      .then(resposta => {
        callback(resposta);
      })
      .catch(error => {
        this.tratamentoErro(error);
      });
  }
  public defaultPost(url: string, data: any, callback: Function) {
    axios
      .post(this.host + url, data, {
        headers: this.cabecalho
      })
      .then(resposta => {
        callback(resposta);
      })
      .catch(error => {
        this.tratamentoErro(error);
      });
  }
  public defaultDelete(url: string, parametros: any, callback: Function) {
    axios
      .delete(this.host + url, {
        params: parametros,
        headers: this.cabecalho
      })
      .then(resposta => {
        callback(resposta);
      })
      .catch(error => {
        this.tratamentoErro(error);
      });
  }
}
