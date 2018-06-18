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

  // PESSOAS ----------
  formPessoa = new FormBuilder().group({
    id: new FormControl(0),
    cpf: new FormControl(),
    rg: new FormControl(),
    nome: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl(),
    genero: new FormControl()
  });

  searchFormPessoa() {
    this.setForm(res => { });
  }
  setForm(callback) {
    this.curriculosService.getPessoaCpf(this.formPessoa.value.cpf, res => {
      console.log("res.data.result");
      console.log(res.data.result);
      if (res.data.result) {
        this.data.pessoas.id = res.data.result.id;
        this.data.pessoas.cpf = res.data.result.cpf;
        this.data.pessoas.rg = res.data.result.rg;
        this.data.pessoas.nome = res.data.result.nome;
        this.data.pessoas.email = res.data.result.email;
        this.data.pessoas.telefone = res.data.result.telefone;
        this.data.pessoas.genero = res.data.result.genero;

        if (res.data.result.curriculoses[0].id)
          this.data.id = res.data.result.curriculoses[0].id;

        this.formPessoa.reset();
        this.formPessoa.setValue(this.data.pessoas);
        callback(true);
      }
    });
    callback(false);

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
      });
    }
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

  // FORMACAO ----------
  public escolaridades = [];
  public formacoes = [];

  public insertFormacao = true;

  formFormacao = new FormBuilder().group({
    id: new FormControl(0),
    instituicaoEnsino: new FormControl(),
    escolaridade: new FormControl(),
    // dataInicio: new FormControl(),
    // dataFim: new FormControl(),
    nome: new FormControl(),
    curriculos: new FormControl()
  });




  protected setFormacao(formacao) {
    console.log(formacao);

    this.insertFormacao = false;
  }

  protected setNovoFormacao() {
    this.insertFormacao = true;
  }
  protected onSubmitFormacao() {
    this.formFormacao.value.curriculos = { id: this.data.id };
    this.formFormacao.value.escolaridade = +this.formFormacao.value.escolaridade;
    //remover - falar com o professor
    console.log(this.formFormacao.value);

    this.curriculosService.saveFormacao(this.formFormacao.value, res => {
      console.log(res);
    })
  }
  protected onDeleteFomacao() {

  }
  settings2 = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      curso: {
        title: 'Curso',
        type: 'string'
      },
      nivel: {
        title: 'Nível de ensino',
        type: 'string'
      },
      instituicao: {
        title: 'Instituição',
        type: 'string'
      },
      inicio: {
        title: 'Ano de início',
        type: 'int'
      },
      fim: {
        title: 'Ano de término',
        type: 'int'
      }
    }
  };
  source2: LocalDataSource = new LocalDataSource();



  settings3 = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      habilidades: {
        title: 'habilidades e qualificações relacionadas ao cargo pretendido',
        type: 'string'
      }
    }
  };
  source3: LocalDataSource = new LocalDataSource();


  settings4 = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      experiencia: {
        title: 'Experiência profissional',
        type: 'string'
      },
      area: {
        title: 'Área de atuação',
        type: 'string'
      },
      inicio: {
        title: 'Ano de início',
        type: 'int'
      },
      fim: {
        title: 'Ano de término',
        type: 'int'
      }
    }
  };
  source4: LocalDataSource = new LocalDataSource();




  selectFase(f) {
    this.defineInicio();
    if (f == 1) {
      this.cb1 = this.btnSelected;
      this.show1 = true;
    }
    if (f == 2) {
      this.cb2 = this.btnSelected;
      this.show2 = true;
    }
    if (f == 3) {
      this.cb3 = this.btnSelected;
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
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

  constructor(fb: FormBuilder, private activeModal: NgbModal, private curriculosService: CurriculosService, public hostService: HostService) {
  }


  ngOnInit() {
    this.selectFase(1);
    this.curriculosService.getEscolaridades(res => {
      this.escolaridades = res.data.result;
    })
  }


}
