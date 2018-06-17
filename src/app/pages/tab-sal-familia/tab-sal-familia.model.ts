export class TabSalFamilia {
    constructor (public id: number,
    public perInicial: Date,
    public perFinal: Date,
  public faixas: Faixa[]){

  }
}

export class Faixa {
	    constructor (public valInicial: number=0,
    public valFinal: number=0,
    public valor: number=0){

    }
	}
