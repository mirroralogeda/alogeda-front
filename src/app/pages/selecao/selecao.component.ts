import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from "@angular/forms";
import { SelecaoService } from "./selecao.service";

@Component({
  selector: 'selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.scss'],
  providers: [SelecaoService]
})
export class SelecaoComponent implements OnInit {

  constructor(
    fb: FormBuilder,
    private activeModal: NgbModal,
    private selecaoService: SelecaoService,
    private router: Router) {

  }



  form = new FormBuilder().group({
    atuacao: new FormControl(),
    escolaridade: new FormControl(),
    formacoes: new FormControl(),
    experiencias: new FormControl()
  });

  atuacoes = [];
  escolaridades = [];
  curriculos = [];
  curriculosFiltrados = [];
  c;
  feitoo = false;
  ac = false;

  setFiltros(atuacao, escolaridade, formacoes, experiencias) {
    this.curriculosFiltrados = this.curriculos;
    let asd = [];
    let um = true;
    let dois = true;
    let tres = true;
    let quatro = true;

    this.curriculosFiltrados.forEach(x => {
      if (atuacao) {
        um = false;
        x.experienciases.forEach(element => {
          if (element.areasAtuacao.id == atuacao) {
            um = true;
          }
        });
      }

      if (escolaridade) {
        dois = false;
        x.formacoeses.forEach(element => {
          if (element.escolaridade.id == escolaridade) {
            dois = true;
          }
        });
      }
      if (formacoes) {
        tres = false;
        if (x.formacoeses.length >= formacoes)
          tres = true;
      }
      if (experiencias) {
        quatro = false;
        if (x.experienciases.length >= experiencias)
          quatro = true;
      }

      if (um && dois && tres && quatro)
        asd.push(x);

    });


    this.curriculosFiltrados = asd;
    console.log(this.curriculosFiltrados);
  }

  onSubmitForm() {
    console.log(this.form.value);
    this.setFiltros(
      +this.form.value.atuacao,
      +this.form.value.escolaridade,
      this.form.value.formacoes,
      this.form.value.experiencias);
  }
  abrirC(){
    this.ac = true;
    this.router.navigate(["pages/cargos/funcionarios/add"]);
  }
  setCurriculo(item) {
    console.log(item);
    this.c = item;
    this.feitoo = true;
  }

  getNiveisFormacao(formacoes) {
    let res = "";
    if (formacoes) {
      formacoes.forEach(x => {
        res = res + x.escolaridade.grau + "; "
      });
    }
    return res;
  }

  getAreasAtuacao(atuacoes) {
    let res = "";
    if (atuacoes) {
      atuacoes.forEach(x => {
        res = res + x.areasAtuacao.nome + "; "
      });
    }
    return res;
  }
  getQuantidadeExperiencias(atuacoes) {
    if (atuacoes)
      return atuacoes.length;
    else
      return 0;
  }
  getPdf(base64) {
    console.log(base64);
    var dataURI = "data:application/pdf;base64," + base64;
    window.open(dataURI, '_blank');
  }


  ngOnInit() {

    this.selecaoService.getArea(res => {
      this.atuacoes = res.data.result;
    });

    this.selecaoService.getEscolaridades(res => {
      this.escolaridades = res.data.result;
    });

    this.selecaoService.getCurriculos(res => {
      this.curriculos = res.data.result;

      this.curriculos.forEach(x => {
        if (x.id) {
          this.selecaoService.getFormacoes(x.id, a => {
            x.formacoeses = a.data.result;
            this.selecaoService.getExperiencia(x.id, b => {
              x.experienciases = b.data.result;
            });
            this.selecaoService.getCandidato(x.id, c => {
              x.pessoas = c.data.result[0].pessoas;
              this.setFiltros(null, null, null, null);
            });
          });
        }
      })
    });


  }

}
