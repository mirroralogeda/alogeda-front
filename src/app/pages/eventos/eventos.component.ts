import { Component, OnInit } from "@angular/core";
import { EventosService } from "./eventos.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { GrupoEventosService } from "../grupo-eventos/grupo-eventos.service";
import { HostService } from "../../host.service";

@Component({
  selector: "data-tables",
  templateUrl: "./eventos.html",
  styleUrls: ["./eventos.scss"]
})
export class EventosComponent {
  insercao: boolean = false;
  data;
  gruposEventos;
  veioGrupos = false;
  tipos = ["NEUTRO", "PROVENTO", "DESCONTO"];

  form = new FormBuilder().group({
    id: new FormControl(),
    grupoEventos: new FormControl(),
    descricao: new FormControl(),
    tipo: new FormControl(),
    formula: new FormControl(),
    automatico: new FormControl(),
    referencia: new FormControl(),
    percentual: new FormControl(),
    valorMinimo: new FormControl(),
    valorMaximo: new FormControl(),
    incidencias: new FormControl(),
    ordemCalculo: new FormControl(),
    eveFixoses: new FormControl(),
    calculoses: new FormControl()
  });

  constructor(
    private gruposEventosService: GrupoEventosService,
    private service: EventosService,
    private modalService: NgbModal,
    fb: FormBuilder,
    private hostService: HostService
  ) {
    this.service.getData().then(data => {
      console.log(data);
      this.data = data;
    });

    this.gruposEventosService.getAllGrupoEventos(retorno => {
      this.veioGrupos = true;
      this.gruposEventos = retorno;
    });
  }

  alterar(item) {
    this.form.setValue(item);
    this.insercao = !this.insercao;
  }

  public onSubmit(item) {
    console.log(this.form.value);
    this.hostService.defaultPost("eventos/save", this.form.value, ret => {
      console.log(ret);
      if (ret.status === 200) {
        this.insercao = false;
        this.form.reset();
        console.log(this.form);
      }
    });
  }
  protected addGrupoEvento(item) {
    let dados = this.form.value;
    dados.grupoEventos = { id: item };
    this.form.setValue(dados);
  }

  protected addNovo() {
    this.insercao = true;
  }

  protected limpaForm() {
    this.insercao = false;
    this.form.reset();
  }

  protected delete() {
    console.log("delete");
    this.hostService.defaultPost("eventos/delete", this.form.value, ret => {
      console.log(ret);
    });
  }
  public setNovo() {}
  public onDelete(item) {}
  formatarGrupo(item) {
    if (item) return item.id + " - " + item.descricao + "";
  }
}
