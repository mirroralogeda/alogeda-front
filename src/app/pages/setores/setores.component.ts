import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SetoresService } from "./setores.service";
import { Resposta } from "./resposta.model";
import { Setores } from "./setores.model";

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.scss'],
  providers: [SetoresService]
})
export class SetoresComponent implements OnInit {

  resposta: Resposta;

  constructor(private activeModal: NgbModal, private setoresService: SetoresService) {}

  ngOnInit() {
    this.setoresService.getAllSetores()
      .subscribe( (dados) => {
        this.resposta = dados;
        this.sourceTable.load(this.setoresService.getDataTable(dados));

      });


  }




  settingsTable = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      nome: {
        title: 'Nome do setor',
        type: 'string'
      }
    }
  };
  sourceTable: LocalDataSource = new LocalDataSource();




}