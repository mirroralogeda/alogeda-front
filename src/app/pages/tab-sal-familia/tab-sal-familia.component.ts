import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TabSalFamilia } from "./tab-sal-familia.model";
import { TabSalFamiliaService } from "./tab-sal-familia.service";
import { HostService } from "../../host.service";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Jsonp } from '@angular/http';

@Component({
  selector: 'tabSalFamilia',
  templateUrl: './tab-sal-familia.component.html',
  styleUrls: ['./tab-sal-familia.component.scss'],
})
export class TabSalFamiliaComponent implements OnInit {
  insercao: boolean = false;
  data: TabSalFamilia[];
  tabSelecionada: TabSalFamilia;
  form = new FormBuilder().group({
    periodoInicial: new FormControl(),
    periodoFinal: new FormControl()
  });

  constructor(private activeModal: NgbModal,
    private service: TabSalFamiliaService,
    fb: FormBuilder,
    modalService: NgbModal) {
  }

  ngOnInit(){
    this.service.getData().then(data => {
      this.data = data;
      this.tabSelecionada = this.service.getVigente(this.data);
    });
  }

    protected limpaForm(){

    }

  protected delete() {

  }

}
