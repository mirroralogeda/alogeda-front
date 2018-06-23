export class Calculo {
  constructor(public perInicial: String = null,
    public perFinal: String = null,
    public calculoId: string,
    public dataCalculo: string) {

  }
}

export class FolhaFuncionario {
  constructor(public id: string,
    public nome: string,
    public cpf: string,
    public totalProventos: string,
    public totalDescontos: string,
    public totalNeutros: string,
    public salarioLiquido: string,
    public salarioBruto: string,
    public itens: ItemFolha[]) {

  }
}

export class ItemFolha {
  constructor(public nome: string,
    public referencia: string,
    public valor: string,
    public tipo: string) {

  }
}
