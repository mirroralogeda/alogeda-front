import { Component, OnInit } from '@angular/core';
import { Resposta } from "./resposta.model";
import { DependentesService } from "./dependentes.service";

@Component({
  selector: 'dependentes',
  templateUrl: "./dependentes.component.html",
  providers: [DependentesService]
})
export class DependentesComponent implements OnInit {
  
  teste = "Ola";
  resposta: Resposta;

  constructor( private DependentesService: DependentesService ) {}
  
  ngOnInit(){
    this.DependentesService.getAllDependentes()
      .subscribe( (dados) => this.resposta = dados );
  }
}