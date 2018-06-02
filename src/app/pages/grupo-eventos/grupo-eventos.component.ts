import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { GrupoEventosService } from "./grupo-eventos.service";
import { Eventos } from "./grupo-eventos.model";

import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "grupo-eventos",
  templateUrl: "./grupo-eventos.component.html",
  styleUrls: ["./grupo-eventos.component.scss"]
})
export class GrupoEventosComponent implements OnInit {
  // eventos;
  ngOnInit() {}

  constructor(private activeModal: NgbModal) {}

  settingsTable = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      descricao: {
        title: "Descrição",
        type: "string"
      },
      observacoes: {
        title: "Observações",
        type: "string"
      }
    }
  };
  sourceTable: LocalDataSource = new LocalDataSource();
}
