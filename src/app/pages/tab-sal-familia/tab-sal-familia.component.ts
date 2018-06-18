import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TabSalFamilia, Faixa } from "./tab-sal-familia.model";
import { TabSalFamiliaService } from "./tab-sal-familia.service";
import { HostService } from "../../host.service";
import { FormsModule } from '@angular/forms';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'tabSalFamilia',
  templateUrl: './tab-sal-familia.component.html',
  styleUrls: ['./tab-sal-familia.component.scss'],
})
export class TabSalFamiliaComponent implements OnInit {
  edicao: boolean = false;
  data: TabSalFamilia[];
  tabSelecionada: TabSalFamilia;
  faixasRemover: Faixa[] = [];

  constructor(private activeModal: NgbModal,
    private service: TabSalFamiliaService,
    modalService: NgbModal) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getData().then(data => {
      this.data = data;
      this.tabSelecionada = this.service.getVigente(this.data);
    });
  }


  addLinha() {
    this.tabSelecionada.faixas.push(new Faixa());
  }

  removeLinha(index) {
    this.faixasRemover.push(this.tabSelecionada.faixas.splice(index, 1)[0]);
  }

  addNovo() {
    this.tabSelecionada = new TabSalFamilia();
    this.edicao = true;
  }

  editar() {
    this.edicao = true;
  }

  cancela() {
    this.faixasRemover = [];
    this.tabSelecionada = this.service.getVigente(this.data);
    this.edicao = false;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }

  async submit() {
    await Promise.all(this.faixasRemover.filter(f => f.id > 0).map(f => this.service.delete(f)));
    this.faixasRemover = [];
    await this.service.salva(this.tabSelecionada);
    this.edicao = false;
    this.loadData();
  }

}

