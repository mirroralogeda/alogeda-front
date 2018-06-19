import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
    FormControl,
    FormGroup,
    Validators,
    FormBuilder
  } from "@angular/forms";
import { VagasService } from "./vagas.service";
import { CargosService } from "../cargos/cargos.service";
import { HostService } from "../../host.service";

@Component({
  selector: "data-tables",
  templateUrl: "./vagas.component.html",
  styleUrls: ["./vagas.component.scss"],
  providers: [VagasService, CargosService]
})
export class VagasComponent implements OnInit {
  
  insert:boolean = false;
  veioCargos = false;
  cargos;
  data;

  form = new FormBuilder().group({
    id: new FormControl(),
    data_inicio: new FormControl(),
    data_fim: new FormControl(),
    quantidade: new FormControl(),
    desc_geral: new FormControl(),
    cargos_id: new FormControl(),
    tipo_liberacao: new FormControl()
  });

  constructor(
    private vagasService: VagasService,
    private cargosService: CargosService,
    private activeModal: NgbModal, 
    fb: FormBuilder,
    private hostService: HostService) {
        this.vagasService.getData().then(data => {
          this.data = data;
        });
    
        this.cargosService.getAllCargos(/*retorno => {
          this.veioCargos = true;
          this.cargos = retorno;
        }*/);
      }

  ngOnInit() {
    //this.vagasService.getAllCidades()
    //   .subscribe((dados) => {
    //     this.resposta = dados.result;
    //   });
  }
  
  public onSubmit(values: Object): void {
    //window.alert(this.form.controls["uf"].value);
    // if (this.form.valid) {
    //   this.hostService.defaultPost(url: '')

    // }
  }

  protected addNovo() {
    this.insert = true;
  }

  
}