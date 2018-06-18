import { Component, OnInit } from "@angular/core";
import { PessoasService } from "./pessoas.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { HostService } from "../../host.service";

@Component({
  selector: "data-tables",
  templateUrl: "./pessoas.html",
  styleUrls: ["./pessoas.scss"]
})
export class PessoasComponent {
  insercao: boolean = false;
  data;
  protected estadosCivis = [];
  form = new FormBuilder().group({
    id: new FormControl(),
    // enderecos: new FormControl(),
    estCivil: new FormControl(),
    nome: new FormControl(),
    cpf: new FormControl(),
    rg: new FormControl(),
    orgaoEmissorRg: new FormControl(),
    estadoEmissorRg: new FormControl(),
    dataEmissãoRg: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl(),
    genero: new FormControl(),
    dataNascimento: new FormControl()
  });
  protected generos = [
    {
      id: 1,
      descricao: "Masculino"
    },
    {
      id: 2,
      descricao: "Feminino"
    },
    {
      id: 3,
      descricao: "Outro"
    }
  ];
  constructor(
    private service: PessoasService,
    private modalService: NgbModal,
    fb: FormBuilder,
    private hostService: HostService
  ) {
    this.service.getData().then(data => {
      console.log(data);
      // data.estCivil = data.estCivil.id;
      this.data = data;
    });
  }

  alterar(item) {
    console.log(item)
    delete item.enderecos;
    delete item.curriculoses;
    delete item.funcionarioses;
    item.dataNascimento = this.dataParaCliente(item.dataNascimento);
    item.dataEmissãoRg = this.dataParaCliente(item.dataEmissãoRg);
    item.estCivil = item.estCivil.id;
    this.form.setValue(item);
    this.insercao = !this.insercao;
  }

  public onSubmit(item) {
    let data = this.form.value;
    data.dataNascimento = this.dataParaServidor(data.dataNascimento);
    data.dataEmissãoRg = this.dataParaServidor(data.dataEmissãoRg);
    data.estCivil = { id: data.estCivil };
    console.log("essa inutilidade", data);
    this.hostService.defaultPost("pessoas/save", data, ret => {
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
    this.hostService.defaultPost("pessoas/delete", this.form.value, ret => {
      console.log(ret);
      this.limpaForm();
    });
  }
  protected BuscarEstadosCivis() {
    this.service.getEstadosCivis(val => {
      this.estadosCivis = val;
    });
  }
  public setNovo() {}
  public onDelete(item) {}

  ngOnInit() {
    this.BuscarEstadosCivis();
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
