export class TabSalFamilia {
  constructor(public perInicial: String = null,
    public perFinal: String = null,
    public faixas: Faixa[] = []) {

  }
}

export class Faixa {
  constructor(public id: number = 0,
    public valInicial: number = 0,
    public valFinal: number = 0,
    public valor: number = 0) {

  }
}
