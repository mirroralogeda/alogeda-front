import { Component, OnInit } from "@angular/core";
import { EventosFixosService } from "./eventosFixos.service";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { GrupoEventosService } from "../grupo-eventos/grupo-eventos.service";
import { HostService } from "../../host.service";
import { FuncionarioService } from "../funcionarios/funcionarios.service";

@Component({
  selector: "data-tables",
  templateUrl: "./eventosFixos.html",
  styleUrls: ["./eventosFixos.scss"]
})
export class EventosFixosComponent {
  insercao: boolean = false;
  data = [];
  funcionariosLista = [];
  eventos = [];

  form = new FormBuilder().group({
    id: new FormControl(),
    eventos: new FormControl(),
    funcionarios: new FormControl(),
    perInicial: new FormControl(),
    perFinal: new FormControl()
  });

  buscarEventosFixos() {
    this.hostService.defaultGet("eventosfixos/getall", {}, retorno => {
      console.log("eventos fixos", retorno.data.result);
      this.data = retorno.data.result;
    });
  }

  buscarFuncionarios() {
    this.hostService.defaultGet("funcionarios/findAll", {}, retorno => {
      this.funcionariosLista = retorno.data.result;
    });
  }

  buscarEventos() {
    this.hostService.defaultGet("eventos/getall", {}, retorno => {
      this.eventos = retorno.data.result;
    });
  }

  constructor(
    private service: EventosFixosService,
    private hostService: HostService
  ) {
    this.buscarEventosFixos();
  }

  alterar(item) {
    this.buscarEventos();
    this.buscarFuncionarios();
    item.perFinal = this.dataParaCliente(item.perFinal);
    item.perInicial = this.dataParaCliente(item.perInicial);
    item.funcionarios = item.funcionarios.id;
    item.eventos = item.eventos.id;
    console.log(item);
    this.form.setValue(item);
    this.insercao = !this.insercao;
  }

  public onSubmit(item) {
    let data = this.form.value;
    data.perInicial = this.dataParaServidor(data.perInicial);
    data.perFinal = this.dataParaServidor(data.perFinal);
    data.funcionarios = { id: data.funcionarios };
    data.eventos = { id: data.eventos };
    // console.log(data);
    this.hostService.defaultPost("eventosfixos/save", data, ret => {
      if (ret.status === 200) {
        this.insercao = false;
        this.form.reset();
        this.buscarEventosFixos();
      }
    });
  }

  protected addNovo() {
    this.insercao = true;
  }

  protected limpaForm() {
    this.insercao = false;
    this.form.reset();
  }

  protected delete() {
    this.hostService.defaultPost(
      "eventosfixos/delete",
      this.form.value,
      ret => {
        console.log(ret);
      }
    );
  }
  public setNovo() {}
  public onDelete(item) {}

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
