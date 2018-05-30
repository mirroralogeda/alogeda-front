import { Injectable } from "@angular/core";
import { HostService } from "./host.service";

@Injectable()
export class LoginService {
  constructor(private hostService: HostService) {}
  public logar(usuario: string, senha: string) {
    this.hostService.defaultPost(
      "login",
      {
        username: usuario,
        password: senha
      },
      e => {
        console.log(e);
        let token = e.headers.authorization;
        this.SetarToken(token);
      }
    );
  }
  public SetarToken(token: string) {
    console.log("setar token");
    window.localStorage.setItem("jwt-login", token);
    console.log(window.localStorage.getItem("jwt-login"));
  }
}
