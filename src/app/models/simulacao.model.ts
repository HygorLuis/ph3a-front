import { TipoCalculo } from "../enums/tipo-calculo";

export class Simulacao {
  constructor() {
    this.id = 0;
    this.tipoCalculo = TipoCalculo.Linear;
    this.juros = 0;
    this.totalJuros = 0;
    this.totalDivida = 0;
    this.dataInclusao = '';
  }

  id: number;
  tipoCalculo: TipoCalculo | string;
  juros: number;
  totalJuros: number;
  totalDivida: number;
  dataInclusao: Date | string;
}
