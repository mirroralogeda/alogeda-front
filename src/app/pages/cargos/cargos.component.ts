import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { CargosService } from "./cargos.service";

@Component({
  selector: 'setores',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss'],
  providers: [CargosService]
})
export class CargosComponent implements OnInit {
  public form: FormGroup;
  insert = true;

  public setores;
  public cbos;
  public cargos;

  public id;
  public nome;
  public atribuicao;
  public cbo_id;
  public setor_id;

  cargo: any = {
    id: '',
    nome: '',
    atribuicao: '',
    cbo: {
      id: '',
      nome: ''
    },
    setor: {
      id: '',
      nome: ''
    }
  };

  constructor(
    fb: FormBuilder,
    private activeModal: NgbModal,
    private cargosService: CargosService) {
    this.carregarDados();
    this.form = fb.group({
      id: [
        0
      ],
      nome: [
        "",
        Validators.compose([Validators.required, Validators.minLength(1)])
      ],
      atribuicoes: [
        "",
        Validators.compose([Validators.required, Validators.minLength(1)])
      ],
      cbo: [

        Validators.compose([Validators.required])
      ],
      setores: [
        Validators.compose([Validators.required])
      ],
    });

    this.id = this.form.controls["id"];
    this.nome = this.form.controls["nome"];
    this.atribuicao = this.form.controls["atribuicoes"];
    this.cbo_id = this.form.controls["cbo"];
    this.setor_id = this.form.controls["setores"];
  }

  ngOnInit() {

  }

  carregarDados() {
    this.cargosService.getAllSetores()
      .subscribe((dados) => {
        this.setores = dados.result;

        this.cargosService.getAllCbos()
          .subscribe((dados) => {
            this.cbos = dados.result;

            this.cargosService.getAllCargos()
              .subscribe((dados) => {
                this.cargos = dados.result;
              });

          });

      });

  }


  public setCargo(cargo) {
    console.log(cargo);
    this.form.controls["id"].setValue(cargo.id);
    this.form.controls["nome"].setValue(cargo.nome);
    this.form.controls["atribuicoes"].setValue(cargo.atribuicoes);
    this.form.controls["cbo"].setValue(cargo.cbo.id);
    this.form.controls["setores"].setValue(cargo.setores.id);
    this.insert = false;
  }

  public setNovo() {
    this.form.controls["id"].reset();
    this.form.controls["nome"].reset();
    this.form.controls["atribuicoes"].reset();
    this.form.controls["cbo"].reset();
    this.form.controls["setores"].reset();
    this.insert = true;
  }

  public onSubmit(values: Object): void {
    // console.log(this.form.value);

    if (this.form.valid) {
      // this.form.value.cbo = +this.form.value.cbo;
      this.cargosService.save(this.form.value)
        .subscribe((dados) => {

          this.carregarDados();
          this.setNovo();
        });
    }
  }

  public onDelete() {
    this.cargosService.delete(this.form.value)
      .subscribe((dados) => {
        this.carregarDados();
        this.setNovo();
      });
  }


}
