import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Simulacao } from '../../../models/simulacao.model';
import { ParcelaService } from '../../../services/parcela.service';
import { TipoCalculo } from '../../../enums/tipo-calculo';
import { SimulacaoService } from '../../../services/simulacao.service';

@Component({
  selector: 'app-calcular-juros',
  templateUrl: './calcular-juros.component.html',
  styleUrl: './calcular-juros.component.css'
})
export class CalcularJurosComponent {

  @Input() abrirCard: boolean = false;
  @Output() cardAberto = new EventEmitter<boolean>();
  tipoCalculo = TipoCalculo;
  simulacao = new Simulacao();

  constructor(private parcelaService: ParcelaService, private simulacaoService: SimulacaoService) {}

  calcularJuros() {
    this.simulacao.totalJuros = 0;

    this.parcelaService.listar().subscribe(parcelas => {
      parcelas.forEach(p => {
        let differenceInTime = new Date().getTime() - new Date(`${p.dataVencimento}T00:00:00`).getTime();
        let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
        let atraso = differenceInDays > 0 ? differenceInDays : 0;

        switch(this.simulacao.tipoCalculo) {
          case TipoCalculo.Linear:
            this.simulacao.totalJuros += (p.valor as number) * this.simulacao.juros * (atraso / 30);
            break;

          case TipoCalculo.Capitalizado:
            this.simulacao.totalJuros += (p.valor as number) * Math.pow((1 + this.simulacao.juros), (atraso / 30) - 1);
            break;
        }
      });

      this.simulacao.totalDivida = parcelas.map(p => p.valor as number).reduce((a, b) => a + b) + this.simulacao.totalJuros;
      this.simulacao.dataInclusao = new Date();

      this.simulacaoService.criar(this.simulacao).subscribe();
    });
  }

  fechar() {
    this.abrirCard = false;
    this.cardAberto.emit(this.abrirCard);
  }
}
