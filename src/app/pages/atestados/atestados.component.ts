import { Component, OnInit } from '@angular/core';
import { Resposta } from "./resposta.model";
import { AtestadosService } from "./atestados.service";

@Component({
  selector: 'atestados',
  templateUrl: "./atestados.component.html",
  providers: [AtestadosService]
})
export class AtestadosComponent implements OnInit {
  
  teste = "Ola";
  resposta: Resposta;

  constructor( private AtestadosService: AtestadosService ) {}
  
  ngOnInit(){
    this.AtestadosService.getAllAtestados()
      .subscribe( (dados) => this.resposta = dados );
  }
}