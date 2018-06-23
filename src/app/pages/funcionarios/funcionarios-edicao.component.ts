import { Component, OnInit } from '@angular/core';
import { Resposta } from "./resposta.model";
import { FuncionarioService } from './funcionarios.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HostService } from '../../host.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'FuncionariosEdicao',
  templateUrl: './funcionarios-edicao.html'
})
export class FuncionariosEdicaoComponent implements OnInit {
  resposta: Resposta = {
    status: "carregando",
    result: []
  };

  form = new FormBuilder().group({
    id: new FormControl(),
    dataAdmissao: ['', Validators.required],
    pessoas: ['', Validators.required],
    nomePai: ['', Validators.required],
    nomeMae: ['', Validators.required],
    pis: ['', Validators.required],
    dataEmissaoPis: ['', Validators.required],
    reservista: ['', Validators.required],
    categoriaReservista: ['', Validators.required],
    nacionalidade: ['', Validators.required],
    naturalidade: ['', Validators.required],
    seguroDesemprego: ['', Validators.required],
    dataDemissao: [''],
    numeroCarteiraTrabalho: ['', Validators.required],
    serieCarteiraTrabalho: ['', Validators.required],
    estadoCarteiraTrabalho: ['', Validators.required],
    dataEmissaoCarteiraTrabalho: ['', Validators.required],
    cnh: ['', Validators.required],
    categoriaCnh: ['', Validators.required],
    orgaoEmissorCnh: ['', Validators.required],
    dataEmissaoCnh: ['', Validators.required],
    dataPrimeiraCnh: ['', Validators.required],
    dataValidadeCnh: ['', Validators.required],
    tituloEleitor: ['', Validators.required],
    zonaTituloEleitor: ['', Validators.required],
    secaoTituloEleitor: ['', Validators.required],
  });
  model = {
    nomeBuscando: ''
  }
  pessoas = []

  private sub: any;
  private id;
  dataParaServidor(dataCliente) {
    if (!dataCliente) {
      return null
    }
    return dataCliente.substr(8, 2) + "/" + dataCliente.substr(5, 2) + "/" + dataCliente.substr(0, 4) + " 00:00:00";
  }
  dataParaCliente(dataServidor) {
    if (!dataServidor) {
      return ""
    }
    return dataServidor.substr(6, 4) + "-" + dataServidor.substr(3, 2) + "-" + dataServidor.substr(0, 2);
  }
  ngOnInit(): void {
    this.hostService.defaultGet("pessoas/getall", null, (dados) => {
      this.pessoas = dados.data.result
    })

    //buscar quando edita
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.hostService.defaultGet("funcionarios/BuscaPorId", { entidadeId: this.id }, (dados) => {
          const dadosFormulario = dados.data.result
          dadosFormulario.pessoas = dadosFormulario.pessoas.id
          dadosFormulario.dataEmissaoPis = this.dataParaCliente(dadosFormulario.dataEmissaoPis)
          dadosFormulario.dataDemissao = this.dataParaCliente(dadosFormulario.dataDemissao)
          dadosFormulario.dataEmissaoCarteiraTrabalho = this.dataParaCliente(dadosFormulario.dataEmissaoCarteiraTrabalho)
          dadosFormulario.dataEmissaoCnh = this.dataParaCliente(dadosFormulario.dataEmissaoCnh)
          dadosFormulario.dataPrimeiraCnh = this.dataParaCliente(dadosFormulario.dataPrimeiraCnh)
          dadosFormulario.dataValidadeCnh = this.dataParaCliente(dadosFormulario.dataValidadeCnh)
      
          this.form.setValue(dadosFormulario);

        })

      }
      // In a real app: dispatch action to load the details here.
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  public onSubmit(item) {
    if (!this.form.valid) {
      alert("Informe todos campos")
      return
    }
    const dadosFormulario = { ...this.form.value }
    dadosFormulario.pessoas = { id: dadosFormulario.pessoas }
    dadosFormulario.dataAdmissao = this.dataParaServidor(dadosFormulario.dataAdmissao)
    dadosFormulario.dataEmissaoPis = this.dataParaServidor(dadosFormulario.dataEmissaoPis)
    dadosFormulario.dataDemissao = this.dataParaServidor(dadosFormulario.dataDemissao)
    dadosFormulario.dataEmissaoCarteiraTrabalho = this.dataParaServidor(dadosFormulario.dataEmissaoCarteiraTrabalho)
    dadosFormulario.dataEmissaoCnh = this.dataParaServidor(dadosFormulario.dataEmissaoCnh)
    dadosFormulario.dataPrimeiraCnh = this.dataParaServidor(dadosFormulario.dataPrimeiraCnh)
    dadosFormulario.dataValidadeCnh = this.dataParaServidor(dadosFormulario.dataValidadeCnh)

    console.log("FORM", dadosFormulario)
    this.hostService.defaultPost("funcionarios/save", dadosFormulario, ret => {
      if (ret.status === 200) {
        this.router.navigate(["pages/cargos/funcionarios"])

        this.form.reset();
      }
    });
  }


  constructor(private FuncionarioService: FuncionarioService, private hostService: HostService, private router: Router, private route: ActivatedRoute) { }
}