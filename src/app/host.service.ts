import { Injectable } from "@angular/core";
import axios from "axios";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Injectable()
export class HostService {
  host: string = "http://localhost:8080/api/";
  cabecalho: object = {
    Authorization: window.localStorage.getItem("jwt-login")
  };
  constructor(private router: Router) {}

  private tratamentoErro(error) {
    let erro = error.response;
    console.log(erro);
    if (erro.status >= 500) {
      console.log("erro no servidor");
    } else if (erro.status == 403) {
      this.logout();
    }
  }

  public logout() {
    window.localStorage.removeItem("jwt-login");
    // this.router.navigateByUrl("/login");
    this.verificaLogin();
  }

  public getToken() {
    const jwt = window.localStorage.getItem("jwt-login");
    return jwt;
  }

  private verificaLogin() {
    console.log("verificando Login");
    if (!this.getToken() && this.router.url !== "/login") {
      console.log("não logado");
      this.router.navigateByUrl("/login");
    } else if (this.router.url === "/login") {
      console.log("loado");
      this.router.navigateByUrl("/pages/dashboard");
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

  public defaultPut(url: string, parametros: any, callback: Function) {
    axios
      .put(this.host + url, {
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
