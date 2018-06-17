import { Injectable } from "@angular/core";
import { HostService } from "./host.service";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
  constructor(private hostService: HostService, private router: Router) {
    // this.verificaLogin();
    // this.alteracaoDeRota();
  }
  public logar(usuario: string, senha: string) {
    this.hostService.defaultPost(
      "login",
      {
        username: usuario,
        password: senha
      },
      e => {
        console.log("token", e);
        let token = e.headers.authorization;
        this.setarToken(token);
      }
    );
    this.verificaLogin();
  }
  public setarToken(token: string) {
    console.log("setar token");
    window.localStorage.setItem("jwt-login", token);
    console.log(window.localStorage.getItem("jwt-login"));
  }

  public getToken() {
    const jwt = window.localStorage.getItem("jwt-login");
    return jwt;
  }

  public verificaLogin() {
    console.log("verificando Login");
    if (!this.getToken() && this.router.url !== "/login") {
      console.log("não logado");
      this.router.navigateByUrl("/login");
    } else if (this.router.url === "/login") {
      console.log("loado");
      this.router.navigateByUrl("/pages/dashboard");
    }
  }
  public logout() {
    window.localStorage.removeItem("jwt-login");
    // this.router.navigateByUrl("/login");
    this.verificaLogin();
  }
  alteracaoDeRota() {
    // this.router.events.subscribe(val => {
    //   console.log("Alterou o caminho", val);
    //   if (val["urlAfterRedirects"] !== "/login" || val["url"] !== "/login")
    //     this.verificaLogin();
    //   else {
    //     console.log("não foi");
    //   }
    // });
  }
}
