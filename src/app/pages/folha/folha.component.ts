import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Calculo, FolhaFuncionario } from "./folha.model";
import { FolhaService } from "./folha.service";
import { HostService } from "../../host.service";
import { FormsModule } from '@angular/forms';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'folha',
  templateUrl: './folha.component.html',
  styleUrls: ['./folha.component.scss'],
})
export class FolhaComponent implements OnInit {
  calculos: Calculo[];
  folhas: FolhaFuncionario[];

  constructor(private activeModal: NgbModal,
    private service: FolhaService,
    modalService: NgbModal) {
  }

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

  async getFolhas(i) {
    this.folhas = await this.service.getFolhas(this.calculos[i].calculoId);
  }


  removeNeutros(itens) {
    return itens.filter(x => x.tipo != "NEUTRO");
  }

  async calcula() {
    await this.service.calcula();
    this.loadData();
  }

}

