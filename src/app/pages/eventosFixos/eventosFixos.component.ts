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

@Component({
  selector: "data-tables",
  templateUrl: "./eventosFixos.html",
  styleUrls: ["./eventosFixos.scss"]
})
export class EventosFixosComponent implements OnInit {
  insercao: boolean = false;
  data = [];
  funcionarios = [];
  eventos = [];

  form = new FormBuilder().group({
    id: new FormControl(),
    eventos: new FormControl(),
    funcionarios: new FormControl(),
    perInicial: new FormControl(),
    perFinal: new FormControl()
  });

  ngOnInit() {
    this.buscarEventosFixos();
  }

  buscarEventosFixos() {
    this.hostService.defaultGet('eventosfixos/getall', {}, retorno => {
      this.data = retorno;
    })
  }

  buscarFuncionarios() {
    this.hostService.defaultGet('funcionarios/getall', {}, retorno => {
      this.funcionarios = retorno;
    })
  }

  buscarEventos() {
    this.hostService.defaultGet('eventos/getall', {}, retorno => {
      this.eventos = retorno;
    })
  }

  constructor(
    private service: EventosFixosService,
    private hostService: HostService
  ) { }

  alterar(item) {
    this.buscarEventos();
    this.buscarFuncionarios();
    item.perFinal = this.dataParaCliente(item.perFinal)
    item.perInicial = this.dataParaCliente(item.perInicial)
    this.form.setValue(item);
    this.insercao = !this.insercao;
  }

  public onSubmit(item) {
    let data = this.form.value;
    data.perInicial = this.dataParaServidor(data.perInicial);
    data.perFinal = this.dataParaServidor(data.perFinal);
    this.hostService.defaultPost("eventosFixos/save", this.form.value, ret => {
      if (ret.status === 200) {
        this.insercao = false;
        this.form.reset();
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
    this.hostService.defaultPost("eventosfixos/delete", this.form.value, ret => {
      console.log(ret);
    });
  }
  public setNovo() { }
  public onDelete(item) { }


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
