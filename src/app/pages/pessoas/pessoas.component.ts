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
    // item.estCivil = item.estCivil.id;
    delete item.enderecos;
    delete item.curriculoses;
    delete item.funcionarioses;
    this.form.setValue(item);
    this.insercao = !this.insercao;
  }

  public onSubmit(item) {
    let data = this.form.value;
    data.estCivil = { id: data.estCivil };
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
}
