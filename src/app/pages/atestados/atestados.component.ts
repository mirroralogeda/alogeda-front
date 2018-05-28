import { Component, OnInit } from '@angular/core';
import { Resposta } from "./resposta.model";
import { AtestadosService } from "./atestados.service";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'atestados',
  templateUrl: "./atestados.component.html",
  providers: [AtestadosService]
})
export class AtestadosComponent implements OnInit {
  
  teste = "Ola";
  resposta: Resposta = {
    status:"carregando",
    result:[]
  };

  constructor( private AtestadosService: AtestadosService ) {}
  
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
      dataInicio: {
        title: 'Data Início',
        type: 'date'
      },
      dataFim: {
        title: 'Data Fim',
        type: 'date'
      },
      medico: {
        title: 'Médico',
        type: 'string'
      },
      observacoes: {
        title: 'Obs.',
        type: 'string'
      },
    }
  };
  sourceTable: LocalDataSource = new LocalDataSource();


  ngOnInit(){
    this.AtestadosService.getAllAtestados()
      .subscribe( (dados) => this.sourceTable.load(dados) );
  }
}