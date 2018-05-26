import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tab_irrf } from "./tab-irrf.model";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'tab_irrf',
    templateUrl: './tab-irrf.component.html',
    styleUrls: ['./tab-irrf.component.scss'],
})
export class Tab_irrfComponent implements OnInit {
    tab_irrf;
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
            val_inicial: {
                title: 'Valor Inicial',
                type: 'number'
            },
            val_final: {
                title: 'Valor Final',
                type: 'number'
            },
            percentual: {
                title: 'Percentual',
                type: 'number'
            },
            deducao: {
                title: 'Valor Dedução',
                type: 'number'
            },
            per_inicial: {
                title: 'Período Inicial',
                type: 'date',

            },
            per_final: {
                title: 'Período Final',
                type: 'date',                
                
            },            
        }
    };
    sourceTable: LocalDataSource = new LocalDataSource();
}