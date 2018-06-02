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
    ngOnInit() { }
    constructor(private activeModal: NgbModal) { }

    formataValores(f) {
        var formatado = "R$ " + f.toFixed(2).replace(".",",");
        alert(formatado);
    };
};



