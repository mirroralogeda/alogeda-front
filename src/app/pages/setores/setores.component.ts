import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { SetoresService } from "./setores.service";
import { HostService } from "../../host.service";

@Component({
  selector: 'setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.scss'],
  providers: [SetoresService]
})
export class SetoresComponent implements OnInit {
  public form: FormGroup;
  insert = true;
  resposta;
  public nome;
  public id;
  setor: any = {
    id: '',
    nome: ''
  };


  constructor(
    fb: FormBuilder,
    private activeModal: NgbModal,
    private setoresService: SetoresService,
    public hostService: HostService) {

    this.form = fb.group({
      nome: [
        "",
        Validators.compose([Validators.required, Validators.minLength(1)])
      ],
      id: [
        0
      ]
    });
    this.nome = this.form.controls["nome"];
    this.id = this.form.controls["id"];
  }

  ngOnInit() {
    this.getSetores();

  }
  getSetores() {
    this.setoresService.getAllSetores()
      .subscribe((dados) => {
        this.resposta = dados.result;
      });
  }

  public setSetor(setor) {
    this.form.controls["nome"].setValue(setor.nome);
    this.form.controls["id"].setValue(setor.id);
    this.insert = false;
  }

  public setNovo() {
    this.form.controls["nome"].reset();
    this.form.controls["id"].reset();
    this.insert = true;
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      this.setoresService.save(this.form.value)
      .subscribe((dados) => {
        console.log(dados);

        this.getSetores();
        this.setNovo();
      });
    }
  }

  public onDelete() {
    this.setoresService.delete(this.form.value)
      .subscribe((dados) => {
        this.getSetores();
        this.setNovo();
      });
  }


}
