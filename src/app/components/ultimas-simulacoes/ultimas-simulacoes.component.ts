import { Component, OnInit } from '@angular/core';
import { SimulacaoService } from '../../services/simulacao.service';
import { Simulacao } from '../../models/simulacao.model';
import { TipoCalculo, TipoCalculoLabel } from '../../enums/tipo-calculo';

@Component({
  selector: 'app-ultimas-simulacoes',
  templateUrl: './ultimas-simulacoes.component.html',
  styleUrl: './ultimas-simulacoes.component.css'
})
export class UltimasSimulacoesComponent implements OnInit {

  simulacoes: Simulacao[] = [];

  constructor(private service: SimulacaoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(simulacoes => {
      this.simulacoes = simulacoes;
      this.formatarValores(2);
    });
  }

  formatarValores(casasDecimais: number): void {
    this.simulacoes.forEach(s => {
      s.tipoCalculo = TipoCalculoLabel.get(s.tipoCalculo as TipoCalculo) as string;
      s.totalJuros = parseFloat((s.totalJuros as number).toFixed(casasDecimais));
      s.totalDivida = parseFloat((s.totalDivida as number).toFixed(casasDecimais));
    });
  }

}
