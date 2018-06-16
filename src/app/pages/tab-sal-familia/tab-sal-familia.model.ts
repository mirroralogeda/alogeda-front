export class TabSalFamilia {
    constructor (public id: number,
    public perInicial: Date,
    public perFinal: Date,
  public faixas: Faixa[]){

  }
}

export class Faixa {
	    constructor (public valInicial: number,
    public valFinal: number,
    public valor: number){

    }
	}
