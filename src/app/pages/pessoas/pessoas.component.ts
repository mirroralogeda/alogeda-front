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

  form = new FormBuilder().group({
    id: new FormControl(),
    // enderecos: new FormControl(),
    // estCivil: new FormControl(),
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

  constructor(
    private service: PessoasService,
    private modalService: NgbModal,
    fb: FormBuilder,
    private hostService: HostService
  ) {
    this.service.getData().then(data => {
      this.data = data;
    });
  }

  alterar(item) {
    this.form.setValue(item);
    this.insercao = !this.insercao;
  }

  public onSubmit(item) {
    this.hostService.defaultPost("pessoas/save", this.form.value, ret => {
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
  public setNovo() {}
  public onDelete(item) {}
}
