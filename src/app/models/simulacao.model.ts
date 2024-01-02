import { TipoCalculo } from "../enums/tipo-calculo";

export class Simulacao {
  constructor() {
    this.id = 0;
    this.tipoCalculo = TipoCalculo.Linear;
    this.juros = '';
    this.totalJuros = '';
    this.totalDivida = '';
    this.dataInclusao = '';
  }

  id: number;
  tipoCalculo: TipoCalculo | string;
  juros: number | string;
  totalJuros: number | string;
  totalDivida: number | string;
  dataInclusao: Date | string;
}
