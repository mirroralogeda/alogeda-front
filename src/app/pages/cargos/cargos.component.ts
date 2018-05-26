import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { CargosService } from "./cargos.service";
import { Cargos } from "./cargos.model";

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss'],
})
export class CargosComponent implements OnInit {
  cargos;
  ngOnInit() {
    // this.cargosService.getAllCargos()
    //   .subscribe(
    //     data => this.cargos = data
    //   )

  }

  constructor(private activeModal: NgbModal) {



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
        title: 'Nome do Cargo',
        type: 'string'
      }
    }
  };
  sourceTable: LocalDataSource = new LocalDataSource();




}
