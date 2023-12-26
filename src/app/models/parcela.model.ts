export class Parcela {
  constructor() {
    this.id = 0;
    this.parcela = '';
    this.valor = '';
    this.dataVencimento = '';
    this.dataInclusao = '';
  }

  id: number;
  parcela: number | string;
  valor: number | string;
  dataVencimento: Date | string;
  dataInclusao: Date | string;
}
