import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Calculo, FolhaFuncionario } from "./folha.model";
import { FolhaService } from "./folha.service";
import { HostService } from "../../host.service";
import { FormsModule } from "@angular/forms";
import { Jsonp } from "@angular/http";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "folha",
  templateUrl: "./folha.component.html",
  styleUrls: ["./folha.component.scss"]
})
export class FolhaComponent implements OnInit {
  calculos: Calculo[];
  folhas: FolhaFuncionario[];

  constructor(
    private activeModal: NgbModal,
    private service: FolhaService,
    modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.calculos = await this.service.getCalculos();
  }

  parseDate(dateString: string): String {
    if (dateString)
      return dateString.replace(/(\d{4})\-(\d{2})\-(\d{2})/, "$3/$2/$1");

    return null;
  }

  number_format(val: string): string {
    return val;
  }

  async getFolhas(i) {
    this.folhas = await this.service.getFolhas(this.calculos[i].calculoId);
  }

  removeNeutros(itens) {
    return itens.filter(x => x.tipo != "NEUTRO" && x.valor != "0");
  }

  getNeutos(itens) {
    return itens.filter(x => x.tipo == "NEUTRO" && x.valor != "0");
  }

  async calcula() {
    await this.service.calcula();
    this.loadData();
  }

  voltar() {
    this.folhas = null;
  }

  imprimir() {
    const eleFolhas = document.getElementById("folhas-geradas");
    const HTML = `
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
      </head>
      <body>
        ${eleFolhas.outerHTML}
      </body>
    `;
    const win = window.open("", "Folhas");
    win.document.body.innerHTML = HTML;
  }
}
