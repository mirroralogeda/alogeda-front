import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { SetoresService } from "./setores.service";
import { Setores } from "./setores.model";

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.scss'],
})
export class SetoresComponent implements OnInit {
  setores;
  ngOnInit() {
    // this.setoresService.getAllSetores()
    //   .subscribe(
    //     data => this.setores = data
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
        title: 'Nome do setor',
        type: 'string'
      }
    }
  };
  sourceTable: LocalDataSource = new LocalDataSource();




}