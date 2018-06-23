import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Cidades } from "./cidades.model";
import { CidadesService } from "./cidades.service";
import { HostService } from "../../host.service";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: 'cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss'],
  providers: [CidadesService]
})
export class CidadesComponent implements OnInit {
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.cidadesService.getAllCidades(retorno => {
      this.resposta = retorno;
    });
  }

  constructor(
    fb: FormBuilder,
    private activeModal: NgbModal,
    private cidadesService: CidadesService,
    public hostService: HostService) {

    this.nome = this.form.controls["nome"];
    this.uf = this.form.controls["uf"];
    this.id = this.form.controls["id"];

    
  }

  setCidade(item) {
    this.form.controls["nome"].setValue(item.nome);
    this.form.controls["uf"].setValue(item.uf);
    this.form.controls["id"].setValue(item.id);
    this.insert = false;
  }

  data;
  public form: FormGroup = new FormBuilder().group({
    nome: [
      "",
      Validators.compose([Validators.required, Validators.minLength(1)])
    ],
    uf: [
      "",
      Validators.compose([Validators.required])
    ],
    id: [
      0
    ]
  });;
  insert = true;
  resposta;
  public nome;
  public uf;
  public id;
  cidade: any = {
    id: '',
    uf: '',
    nome: ''
  };

  cidadesUf = [
    { Estado: "Acre", Sigla: "AC" },
    { Estado: "Alagoas", Sigla: "AL" },
    { Estado: "Amapá", Sigla: "AP" },
    { Estado: "Amazonas", Sigla: "AM" },
    { Estado: "Bahia", Sigla: "BA" },
    { Estado: "Ceará", Sigla: "CE" },
    { Estado: "Distrito Federal", Sigla: "DF" },
    { Estado: "Espírito Santo", Sigla: "ES" },
    { Estado: "Goiás", Sigla: "GO" },
    { Estado: "Maranhão", Sigla: "MA" },
    { Estado: "Mato Grosso", Sigla: "MT" },
    { Estado: "Mato Grosso do Sul", Sigla: "MS" },
    { Estado: "Minas Gerais", Sigla: "MG" },
    { Estado: "Pará", Sigla: "PA" },
    { Estado: "Paraíba", Sigla: "PB" },
    { Estado: "Paraná", Sigla: "PR" },
    { Estado: "Pernambuco", Sigla: "PE" },
    { Estado: "Piauí", Sigla: "PI" },
    { Estado: "Rio de Janeiro", Sigla: "RJ" },
    { Estado: "Rio Grande do Norte", Sigla: "RN" },
    { Estado: "Rio Grande do Sul", Sigla: "RS" },
    { Estado: "Rondônia", Sigla: "RO" },
    { Estado: "Roraima", Sigla: "RR" },
    { Estado: "Santa Catarina", Sigla: "SC" },
    { Estado: "São Paulo", Sigla: "SP" },
    { Estado: "Sergipe", Sigla: "SE" },
    { Estado: "Tocantins", Sigla: "TO" },
  ];
  
  public onSubmit() {
    console.log(this.form.value);
    this.cidadesService.save(this.form.value, () => {
      this.getAll();
      this.setNovo();
      this.insert = true;
    });
  }

  Deletar() {
    this.cidadesService.delete(this.form.value, ret => {
      this.getAll();
      this.setNovo();
    });
  }

  setNovo() {
    this.form.controls["nome"].reset();
    this.form.controls["uf"].reset();
    this.insert = true;
  }
  
}