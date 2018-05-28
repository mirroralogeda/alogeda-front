import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TabSalFamilia } from "./tab-sal-familia.model";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'tabSalFamilia',
    templateUrl: './tab-sal-familia.component.html',
    styleUrls: ['./tab-sal-familia.component.scss'],
})
export class TabSalFamiliaComponent implements OnInit {
    ngOnInit() { }
    constructor(private activeModal: NgbModal) { }
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
            valInicial: {
                title: 'Valor Inicial',
                type: 'number'
            },
            valFinal: {
                title: 'Valor Final',
                type: 'number'
            },
            valor: {
                title: 'Valor',
                type: 'number'
            },
            perInicial: {
                title: 'Período Inicial',
                type: 'date',
            },
            perFinal: {
                title: 'Período Final',
                type: 'date',                
                           },            
        }
    };
    sourceTable: LocalDataSource = new LocalDataSource();
}
