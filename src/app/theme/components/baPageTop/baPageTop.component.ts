import { Component } from "@angular/core";

import { GlobalState } from "../../../global.state";
import { LoginService } from "../../../login.service";

@Component({
  selector: "ba-page-top",
  templateUrl: "./baPageTop.html",
  styleUrls: ["./baPageTop.scss"]
})
export class BaPageTop {
  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState, private loginService: LoginService) {
    this._state.subscribe("menu.isCollapsed", isCollapsed => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged("menu.isCollapsed", this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  logout() {
    this.loginService.logout();
  }
}
