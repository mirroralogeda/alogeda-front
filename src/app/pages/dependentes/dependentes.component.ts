import { Component, OnInit } from '@angular/core';
import { Resposta } from "./resposta.model";
import { DependentesService } from "./dependentes.service";
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'dependentes',
  templateUrl: "./dependentes.component.html",
  providers: [DependentesService]
})
export class DependentesComponent implements OnInit {

  teste = "Ola";
  resposta: Resposta = {
    status: "carregando",
    result: []
  };

  constructor(private DependentesService: DependentesService, private route: ActivatedRoute) { }

  settingsTable = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true,
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
      dataNascimento: {
        title: 'Data Nascimento',
        type: 'date'
      },
      cpf: {
        title: 'CPF',
        type: 'number'
      },
      certidaoNascimento: {
        title: 'Certidão de Nascimento',
        type: 'string'
      },
      impostoRenda: {
        title: 'Imposto de renda',
        type: 'string'
      },
      auxilioCreche: {
        title: 'Auxilio Creche',
        type: 'string'
      },
      salarioFamilia: {
        title: 'Salario Família',
        type: 'string'
      },
      nome: {
        title: 'Nome do Funcionario.',
        type: 'string'
      },
    }
  };
  sourceTable: LocalDataSource = new LocalDataSource();

  private sub: any;
  private id: number;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.DependentesService.getAllDependentes(this.id, (dados) => {
        this.sourceTable.load(dados.data.result)
      })
      
    });
  }
  addRecord(event) {
    event.newData.funcionarios = { id: this.id }
    this.DependentesService.add(event.newData, () => {
      event.confirm.resolve(event.newData);
      this.DependentesService.getAllDependentes(this.id, (dados) => {
        this.sourceTable.load(dados.data.result)
      })
    })
  }
  updateRecord(event) {
    event.newData.funcionarios = { id: this.id }
    
    this.DependentesService.add(event.newData, () => {
      event.confirm.resolve(event.newData);
      this.DependentesService.getAllDependentes(this.id, (dados) => {
        this.sourceTable.load(dados.data.result)
      })
    })
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo excluir o registro?')) {
      this.DependentesService.delete(event.data, () => {
        event.confirm.resolve();
        this.DependentesService.getAllDependentes(this.id, (dados) => {
          this.sourceTable.load(dados.data.result)
        })
      })
    } else {
      event.confirm.reject();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}