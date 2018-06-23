import { Component, OnInit } from '@angular/core';
import { Resposta } from "./resposta.model";
import { FuncionarioService } from './funcionarios.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'Funcionarios',
  templateUrl: './funcionarios.html'
})
export class FuncionariosComponent implements OnInit {
  resposta: Resposta = {
    status: "carregando",
    result: []
  };

  model ={
    nomeBuscando:''
  }
  ngOnInit(): void {
    this.buscar()
  }
  buscar(){
    console.log("Buscando por "+this.model.nomeBuscando)
    this.FuncionarioService.getData(this.model.nomeBuscando).then(resultado =>{
      this.resposta.result=resultado;
    })
  }
  alterarFuncionario(item){
    this.router.navigate(["pages/cargos/funcionarios/edit/"+item.id])
  }
  alterarDependentes(item){
    this.router.navigate(["pages/cadastros/dependentes/"+item.id])
  }
  alterarAtestados(item){
    this.router.navigate(["pages/cadastros/atestados/"+item.id])
  }
  alterarSalarios(item){
    this.router.navigate(["pages/cadastros/salarios/"+item.id])
  }
  constructor(private FuncionarioService: FuncionarioService,private router:Router) { }
}