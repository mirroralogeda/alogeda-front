import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { EventosService } from "./eventos.service";
import { Eventos } from "./eventos.model";

import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.scss"]
})
export class EventosComponent implements OnInit {
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
      nome: {
        title: "Nome do Cargo",
        type: "string"
      }
    }
  };
  sourceTable: LocalDataSource = new LocalDataSource();
}
