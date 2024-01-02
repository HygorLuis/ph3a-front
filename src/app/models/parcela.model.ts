export class Parcela {
  constructor() {
    this.id = 0;
    this.parcela = 0;
    this.valor = 0;
  }

  id: number;
  parcela: number;
  valor: number;
  dataVencimento?: Date;
  dataInclusao?: Date;
}
