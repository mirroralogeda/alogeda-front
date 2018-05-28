import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Resposta } from "./resposta.model";
import { CidadesService } from "./cidades.service";
import { Cidades } from "./cidades.model";

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'cidades',
  templateUrl: "./cidades.component.html",
  styleUrls: ['./cidades.component.scss'],
  providers: [CidadesService]
})
export class CidadesComponent implements OnInit {
  
  resposta: Resposta;

  constructor(private activeModal: NgbModal, private cidadesService: CidadesService) {}
  
  ngOnInit() {
    this.cidadesService.getAllCidades()
      .subscribe( (dados) => {
        this.resposta = dados;
        this.sourceTable.load(this.cidadesService.getDataTable(dados));
    });
  }  
  sourceTable: LocalDataSource = new LocalDataSource();
}