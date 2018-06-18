import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Resposta } from "./resposta.model";
import { DependentesService } from "./dependentes.service";
import { LocalDataSource, ViewCell, DefaultEditor } from 'ng2-smart-table';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'button-view',
  template: `
    <div>{{ renderValue }}</div>
  `,
})
export class DateViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().substr(0, 10);
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}



@Component({
  template: `
    <input [ngClass]="inputClass"
            #name
            type="date"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (keyup)="updateValue()"
            (change)="updateValue()"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()"><br>
    <div [hidden]="true" [innerHTML]="cell.getValue()" #htmlValue></div>
  `,
})
export class DateEditorComponent extends DefaultEditor implements AfterViewInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('htmlValue') htmlValue: ElementRef;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      this.name.nativeElement.value = this.getUrlName();
    }
  }
  dataParaServidor(dataCliente) {
    if (!dataCliente) {
      return null
    }
    return dataCliente.substr(8, 2) + "/" + dataCliente.substr(5, 2) + "/" + dataCliente.substr(0, 4) + " 00:00:00";
  }
  dataParaCliente(dataServidor) {
    if (!dataServidor) {
      return ""
    }
    return dataServidor.substr(6, 4) + "-" + dataServidor.substr(3, 2) + "-" + dataServidor.substr(0, 2);
  }
  updateValue() {
    const name = this.name.nativeElement.value;
    this.cell.newValue = this.dataParaServidor(name);
    console.log("updateValue", this.name.nativeElement.value, this.cell.newValue)
  }

  getUrlName(): string {
    return this.dataParaCliente(this.htmlValue.nativeElement.innerText);
  }
}





@Component({
  selector: 'button-view',
  template: `
    <input type="checkbox" disabled=disabled [checked]="renderValue"/>
  `,
})
export class CheckboxViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value;
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}



@Component({
  template: `
    <input [ngClass]="inputClass"
            #name
            type="checkbox"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (keyup)="updateValue()"
            (change)="updateValue()"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()"><br>
    <div [hidden]="true" [innerHTML]="cell.getValue()" #htmlValue></div>
  `,
})
export class CheckboxEditorComponent extends DefaultEditor implements AfterViewInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('htmlValue') htmlValue: ElementRef;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    console.log("after init",this.cell)
      this.name.nativeElement.checked = this.cell.newValue;
  }
  updateValue() {
    this.cell.newValue = this.name.nativeElement.checked;
  }

}



@Component({
  selector: 'dependentes',
  templateUrl: "./dependentes.component.html",
  providers: [DependentesService],
  entryComponents: [DateEditorComponent, DateViewComponent, CheckboxViewComponent, CheckboxEditorComponent]
})
export class DependentesComponent implements OnInit {

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
        type: 'custom',
        renderComponent: DateViewComponent,
        editor: {
          type: 'custom',
          component: DateEditorComponent,
        }
      },
      cpf: {
        title: 'CPF',
        type: 'string'
      },
      certidaoNascimento: {
        title: 'Certidão de Nascimento',
        type: 'string'
      },
      
      nome: {
        title: 'Nome do Funcionário.',
        type: 'string'
      },
      impostoRenda: {
        title: 'Imposto de renda',
        
        type: 'custom',
        renderComponent: CheckboxViewComponent,
        editor: {
          type: 'custom',
          component: CheckboxEditorComponent,
        }
      },
      auxilioCreche: {
        title: 'Auxilio Creche',
        
        type: 'custom',
        renderComponent: CheckboxViewComponent,
        editor: {
          type: 'custom',
          component: CheckboxEditorComponent,
        }
      },
      salarioFamilia: {
        title: 'Salario Família',
        
        type: 'custom',
        renderComponent: CheckboxViewComponent,
        editor: {
          type: 'custom',
          component: CheckboxEditorComponent,
        }
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
    this.DependentesService.add(this.id,event.newData, () => {
      event.confirm.resolve(event.newData);
      this.DependentesService.getAllDependentes(this.id, (dados) => {
        this.sourceTable.load(dados.data.result)
      })
    })
  }
  updateRecord(event) {
   
    this.DependentesService.add(this.id, event.newData, () => {
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