import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from "@angular/forms";
import { LocalDataSource } from 'ng2-smart-table';
import { CurriculosService } from "./curriculos.service";
import { HostService } from "../../host.service";

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss'],
  providers: [CurriculosService]
})
export class CurriculosComponent implements OnInit {

  public data = {
    id: null,
    pessoas: {
      id: null,
      cpf: null,
      rg: null,
      nome: null,
      email: null,
      telefone: null,
      genero: null
    }
  }

  btnSelected = 'btn btn-warning';
  btnDefault = 'btn btn-default';
  btnOk = 'btn btn-success';
  cb1 = this.btnDefault;
  cb2 = this.btnDefault;
  cb3 = this.btnDefault;
  cb4 = this.btnDefault;
  cb5 = this.btnDefault;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  concluido = false;

  formConclusao = new FormBuilder().group({
    descricao: new FormControl()
  });

  formPessoa = new FormBuilder().group({
    id: new FormControl(0),
    cpf: new FormControl(),
    rg: new FormControl(),
    nome: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl(),
    genero: new FormControl()
  });

  formFormacao = new FormBuilder().group({
    id: new FormControl(0),
    instituicaoEnsino: new FormControl(),
    escolaridade: new FormControl(),
    dataInicio: new FormControl(),
    dataFim: new FormControl(),
    nome: new FormControl(),
    curriculos: new FormControl()
  });


  formExperiencia = new FormBuilder().group({
    id: new FormControl(0),
    areasAtuacao: new FormControl(),
    curriculos: new FormControl(),
    dataInicio: new FormControl(),
    dataFim: new FormControl(),
    cargoOcupado: new FormControl(),
    observacoes: new FormControl()
  });

  searchFormPessoa() {
    this.setForm(res => { });
  }
  setForm(callback) {
    this.curriculosService.getPessoaCpf(this.formPessoa.value.cpf, res => {

      if (res.data.result) {
        this.data.pessoas.id = res.data.result.id;
        this.data.pessoas.cpf = res.data.result.cpf;
        this.data.pessoas.rg = res.data.result.rg;
        this.data.pessoas.nome = res.data.result.nome;
        this.data.pessoas.email = res.data.result.email;
        this.data.pessoas.telefone = res.data.result.telefone;
        this.data.pessoas.genero = res.data.result.genero;

        if (res.data.result.curriculoses)
          this.data.id = res.data.result.curriculoses[0].id;
        else {
          this.curriculosService.getCurriculo(this.data.pessoas.id, res2 => {

            this.data.id = res2.data.result[0].id;
            if (res2.data.result[0].descricao)
              this.formConclusao.setValue({ descricao: res2.data.result[0].descricao });
            else
              this.formConclusao.setValue({ descricao: "" });
          });
        }

        this.formPessoa.reset();
        this.formPessoa.setValue(this.data.pessoas);
        callback(true);
      }
    });
    callback(false);

  }
  updateNovamente() {
    this.concluido = false;
  }

  concluirCurriculo(content) {
    let data = {
      id: this.data.id,
      pessoas: {
        id: this.data.pessoas.id
      },
      descricao: this.formConclusao.value.descricao
    }
    this.curriculosService.saveCurriculo(data, res => {
      console.log(res);
      this.concluido = true;
    });

  }

  onSubmitCurriculo() {
    if (this.data.pessoas.id != null) {
      let data = {
        pessoas: {
          id: this.data.pessoas.id
        }
      }
      this.curriculosService.saveCurriculo(data, res => {
        console.log(res);
        this.searchFormPessoa();

      });
    }
  }

  public onSubmitPessoa(): void {
    console.log(this.data.pessoas.id);
    if (this.data.pessoas.id == null) {
      this.curriculosService.savePessoa(this.formPessoa.value, res => {
        if (res) {
          this.selectFase(2);
          this.setForm(res => {
            if (res && this.data.id == null) {
              this.onSubmitCurriculo();
            }
          })
        }
      });
    } else {
      if (this.data.id == null) {
        this.onSubmitCurriculo();
      }
      this.selectFase(2);
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  // FORMACAO ----------
  public escolaridades = [];
  public formacoes = [];

  public insertFormacao = true;


  protected onSubmitFormacao() {
    console.log(this.formFormacao.value);

    this.formFormacao.value.curriculos = { id: this.data.id };
    this.formFormacao.value.escolaridade = +this.formFormacao.value.escolaridade;
    this.formFormacao.value.dataInicio = this.dataParaServidor(this.formFormacao.value.dataInicio);
    this.formFormacao.value.dataFim = this.dataParaServidor(this.formFormacao.value.dataFim);

    this.curriculosService.saveFormacao(this.formFormacao.value, res => {
      console.log(res);
      this.formFormacao.reset();
      this.getFormacoes();
    })
  }


  public setFormacao(formacao) {
    let data = formacao;
    if (formacao.dataInicio)
      data.dataInicio = this.dataParaCliente(formacao.dataInicio);
    if (formacao.dataFim)
      data.dataFim = this.dataParaCliente(formacao.dataFim);

    data.escolaridade = formacao.escolaridade.id;

    this.formFormacao.reset();
    this.formFormacao.setValue(data);
    this.insertFormacao = false;
    this.getFormacoes();
  }

  public getFormacoes() {
    this.curriculosService.getFormacoes(this.data.id, res => {
      console.log(res.data.result);
      if (res.data.result) {
        this.formacoes = res.data.result
      }
    });
  }

  protected setNovoFormacao() {
    this.formFormacao.reset();
    this.insertFormacao = true;
  }

  protected onDeleteFomacao(data) {
    let asd = { id: data.id }
    this.curriculosService.deleteFormacoes(asd, res => {
      console.log(res);
      this.getFormacoes();
    });

  }



  // EXPERIENCIAS ----------
  public atuacoes = [];
  public experiencias = [];

  public insertExperiencia = true;


  protected onSubmitExperiencia() {
    console.log(this.formExperiencia.value);

    this.formExperiencia.value.curriculos = { id: this.data.id };
    this.formExperiencia.value.areasAtuacao = +this.formExperiencia.value.areasAtuacao;
    this.formExperiencia.value.dataInicio = this.dataParaServidor(this.formExperiencia.value.dataInicio);
    this.formExperiencia.value.dataFim = this.dataParaServidor(this.formExperiencia.value.dataFim);

    this.curriculosService.saveExperiencia(this.formExperiencia.value, res => {
      console.log(res);
      this.formExperiencia.reset();
      this.getExperiencia();
    })
  }


  public setExperiencia(experiencia) {
    if (experiencia.dataInicio)
      experiencia.dataInicio = this.dataParaCliente(experiencia.dataInicio);
    if (experiencia.dataFim)
      experiencia.dataFim = this.dataParaCliente(experiencia.dataFim);

    experiencia.areasAtuacao = experiencia.areasAtuacao.id;

    this.formExperiencia.reset();
    this.formExperiencia.setValue(experiencia);
    this.insertExperiencia = false;
    this.getExperiencia();
  }

  public getExperiencia() {
    this.curriculosService.getExperiencia(this.data.id, res => {
      console.log(res.data.result);
      if (res.data.result) {
        this.experiencias = res.data.result
      }
    });
  }

  protected setNovoExperiencia() {
    this.formExperiencia.reset();
    this.insertExperiencia = true;
  }

  protected onDeleteExperiencia(data) {
    let asd = { id: data.id }
    this.curriculosService.deleteExperiencia(asd, res => {
      console.log(res);
      this.getExperiencia();
    });

  }



  selectFase(f) {
    this.defineInicio();
    if (f == 1) {
      this.cb1 = this.btnSelected;
      this.show1 = true;
    }
    if (f == 2) {
      this.cb2 = this.btnSelected;
      this.getFormacoes();
      this.show2 = true;
    }
    if (f == 3) {
      this.cb3 = this.btnSelected;
      this.getExperiencia();
      this.show3 = true;

    }
    if (f == 4) {
      this.cb4 = this.btnSelected;
      this.show4 = true;
    }
    if (f == 5) {
      this.cb5 = this.btnSelected;
      this.show5 = true;
    }
  };

  defineInicio() {
    this.cb1 = this.btnDefault;
    this.cb2 = this.btnDefault;
    this.cb3 = this.btnDefault;
    this.cb4 = this.btnDefault;
    this.cb5 = this.btnDefault;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
  }

  public generos = [
    {
      nome: "Masculino",
      id: 1
    }, {
      nome: "Feminino",
      id: 2
    }
  ]


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


  constructor(fb: FormBuilder, private activeModal: NgbModal, private curriculosService: CurriculosService, public hostService: HostService) {
  }


  ngOnInit() {
    this.selectFase(1);
    this.curriculosService.getEscolaridades(res => {
      this.escolaridades = res.data.result;
    });
    this.curriculosService.getArea(res => {
      this.atuacoes = res.data.result;
    });
  }


}
