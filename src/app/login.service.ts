import { Injectable } from "@angular/core";
import { HostService } from "./host.service";

@Injectable()
export class LoginService {
  constructor(private hostService: HostService) {}
  public logar(usuario: string, senha: string) {
    this.hostService.defaultPost(
      "/api/login",
      {
        username: usuario,
        password: senha
      },
      e => {
        console.log(e);
      }
    );
  }
}
