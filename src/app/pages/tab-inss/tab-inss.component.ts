import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TabInss, Faixa } from "./tab-inss.model";
import { TabInssService } from "./tab-inss.service";
import { HostService } from "../../host.service";
import { FormsModule } from '@angular/forms';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'tabInss',
  templateUrl: './tab-inss.component.html',
  styleUrls: ['./tab-inss.component.scss'],
})
export class TabInssComponent implements OnInit {
  edicao: boolean = false;
  data: TabInss[];
  tabSelecionada: TabInss = new TabInss();
  faixasRemover: Faixa[] = [];

  constructor(private activeModal: NgbModal,
    private service: TabInssService,
    modalService: NgbModal) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getData().then(data => {
      this.data = data;
      this.tabSelecionada = this.getVigente();
    });
  }

  addLinha() {
    this.tabSelecionada.faixas.push(new Faixa());
  }

  removeLinha(index) {
    this.faixasRemover.push(this.tabSelecionada.faixas.splice(index, 1)[0]);
  }

  addNovo() {
    this.tabSelecionada = new TabInss();
    this.edicao = true;
  }

  editar() {
    this.edicao = true;
  }

  cancela() {
    this.faixasRemover = [];
    this.edicao = false;
    this.loadData();
  }

  parseDate(dateString: string): String {
    if (dateString)
      return dateString.replace(/(\d{4})\-(\d{2})\-(\d{2})/, "$3/$2/$1");

    return null;
  }

  async submit() {
    await this.service.delete(this.faixasRemover.filter(f => f.id > 0));
    this.faixasRemover = [];
    await this.service.salva(this.tabSelecionada);
    this.edicao = false;
    this.loadData();
  }

  selecionaTab(index) {
    this.tabSelecionada = this.data[index];
  }

  getVigente(): TabInss {
    return this.data.slice(-1)[0];
  }

  toDec(num: number): number {
    return num / 100;
  }

  toCent(num: number): string {
    return (num * 100).toPrecision(4);
  }

}

