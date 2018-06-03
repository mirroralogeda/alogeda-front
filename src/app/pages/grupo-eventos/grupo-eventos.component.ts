import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { GrupoEventosService } from "./grupo-eventos.service";

import { LocalDataSource } from "ng2-smart-table";
import { GrupoEventos } from "./grupo-eventos.model";

@Component({
  selector: "grupo-eventos",
  templateUrl: "./grupo-eventos.component.html",
  styleUrls: ["./grupo-eventos.component.scss"]
})
export class GrupoEventosComponent implements OnInit {
  // eventos;
  ngOnInit() {
    this.getAll();
  }

  constructor(
    private activeModal: NgbModal,
    private GrupoEventosService: GrupoEventosService
  ) {}

  settingsTable = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true
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

  getAll() {
    this.GrupoEventosService.getAllGrupoEventos(retorno => {
      this.sourceTable.empty();
      this.sourceTable.load(retorno);
    });
  }
  addRecord(event) {
    this.GrupoEventosService.add(event.newData, () => {
      event.confirm.resolve(event.newData);
    });
  }
  updateRecord(event) {
    console.log(event);
    this.GrupoEventosService.add(event.newData, () => {
      event.confirm.resolve(event.newData);
    });
  }
  onDeleteConfirm(event): void {
    console.log(event);
    let a: GrupoEventos = event.data;
    this.GrupoEventosService.delete(a, ret => {
      console.log(ret);
      this.getAll();
    });
  }
  ngOnDestroy() {}
}
