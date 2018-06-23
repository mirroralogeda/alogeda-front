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
  cargos = [];
  data;

  form = new FormBuilder().group({
    id: new FormControl(),
    dataInicio: new FormControl(this.dataParaCliente(new Date().toLocaleDateString())),
    dataFim: new FormControl(),
    quantidade: new FormControl(1),
    descGeral: new FormControl(),
    cargos: new FormControl(),
    tipoLiberacao: new FormControl()
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
    
      this.hostService.defaultGet('cargos/getall', {}, retorno => {this.cargos = retorno.data.result});
      }

  ngOnInit() {
    this.hostService.defaultGet('cargos/getall', {}, retorno => {this.cargos = retorno.data.result});
  }
  
  public onSubmit(values: Object): void {
    let data = this.form.value;
    if (this.form.value.cargos != null) {
      data.dataInicio = this.dataParaServidor(data.dataInicio);
      data.dataFim = this.dataParaServidor(data.dataFim);
      data.cargos = {id: data.cargos};
      this.hostService.defaultPost("vagas/save", data, ret => { 
        this.insert = false;
        this.vagasService.getData().then(data => {
          this.data = data;
        });
      });

    } else {
      window.alert("Informe um Cargo");
    }
  }

  alterar(item) {
    delete item.curriculoses;
    delete item.habilidadeses;
    item.dataInicio = this.dataParaCliente(item.dataInicio);
    item.dataFim = this.dataParaCliente(item.dataFim);
    item.cargos = item.cargos.id;
    this.form.setValue(item);
    this.insert = !this.insert;
  }

  formatarTipoLiberacao(valor) {
    if (valor == 1) {
      return  "Interna";
    } else if (valor == 2) {
      return  "Externa";
    } else if (valor == 3) {
      return  "Interna/Externa";
    }
  }

  dataFormatada(data) {
    if (!data) {
      return "";
    }
    return (
      data.substr(0, 2) +
      "/" +
      data.substr(3, 2) +
      "/" +
      data.substr(6, 4)      
    );
  }

  protected addNovo() {
    this.insert = true;
    this.form.value.dataInicio = this.dataParaCliente(new Date().toLocaleDateString());
    this.form.value.quantidade = 1;
  }

  protected limpaForm() {
    this.form.reset();
    this.vagasService.getData().then(data => {
      this.data = data;
    });
    this.insert = false;
  }

  dataParaServidor(dataCliente) {
    if (!dataCliente) {
      return null;
    }
    return (
      dataCliente.substr(8, 2) +
      "/" +
      dataCliente.substr(5, 2) +
      "/" +
      dataCliente.substr(0, 4) +
      " 00:00:00"
    );
  }

  dataParaCliente(dataServidor) {
    if (!dataServidor) {
      return "";
    }
    return (
      dataServidor.substr(6, 4) +
      "-" +
      dataServidor.substr(3, 2) +
      "-" +
      dataServidor.substr(0, 2)
    );
  }

  
}