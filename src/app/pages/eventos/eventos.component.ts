import { Component, OnInit } from "@angular/core";
import { EventosService } from "./eventos.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { GrupoEventosService } from "../grupo-eventos/grupo-eventos.service";

@Component({
  selector: "data-tables",
  templateUrl: "./eventos.html",
  styleUrls: ["./eventos.scss"]
})
export class EventosComponent {
  data;
  gruposEventos;
  veioGrupos = false;
  public formGroup = new FormGroup({
    id: new FormControl(''),
    grupoEventos: new FormControl(''),
    descricao: new FormControl(''),
    tipo: new FormControl(''),
    formula: new FormControl(''),
    automatico: new FormControl(''),
    referencia: new FormControl(''),
    percentual: new FormControl(''),
    valorMinimo: new FormControl(''),
    valorMaximo: new FormControl(''),
    incidencias: new FormControl(''),
    ordemCalculo: new FormControl('')
  });

  constructor(
    private gruposEventosService: GrupoEventosService,
    private service: EventosService,
    private modalService: NgbModal
  ) {
    this.service.getData().then(data => {
      console.log(data);
      this.data = data;
    });

    this.gruposEventosService.getAllGrupoEventos(retorno => {
      console.log("grupos", retorno);
      this.veioGrupos = true;
      this.gruposEventos = retorno;
    });
  }

  setVal(item) {}

  public onSubmit(item) {
    console.log(this.formGroup);
  }
  public setNovo() {}
  public onDelete(item) {}
  formatarGrupo(item) {
    if (item) return item.id + " - " + item.descricao + "";
  }
}
