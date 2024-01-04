import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Simulacao } from '../../../models/simulacao.model';
import { ParcelaService } from '../../../services/parcela.service';
import { TipoCalculo } from '../../../enums/tipo-calculo';
import { SimulacaoService } from '../../../services/simulacao.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular-juros',
  templateUrl: './calcular-juros.component.html',
  styleUrl: './calcular-juros.component.css',
})
export class CalcularJurosComponent implements OnInit {
  @Input() abrirCard: boolean = false;
  @Output() cardAberto = new EventEmitter<boolean>();

  tipoCalculo = TipoCalculo;
  simulacao = new Simulacao();
  inputJurosIsFocus: boolean = false;

  jurosControl = new FormControl('', [
    Validators.required,
    Validators.min(0.01),
  ]);

  constructor(
    private parcelaService: ParcelaService,
    private simulacaoService: SimulacaoService
  ) {}

  ngOnInit(): void {
    this.jurosControl.valueChanges.subscribe((value) => {
      this.simulacao.juros = parseFloat(value as string);
    });
  }

  calcularJuros(): void {
    if (this.jurosControl.invalid) return;

    this.simulacao.totalJuros = 0;
    this.simulacao.totalDivida = 0;
    let somaJuros: number = 0;

    this.parcelaService.listar().subscribe((parcelas) => {
      parcelas.forEach((p) => {
        let differenceInTime =
          new Date().getTime() -
          new Date(`${p.dataVencimento}T00:00:00`).getTime();
        let differenceInDays = Math.round(
          differenceInTime / (1000 * 3600 * 24)
        );
        let atraso = differenceInDays > 0 ? differenceInDays : 0;

        switch (this.simulacao.tipoCalculo) {
          case TipoCalculo.Linear:
            somaJuros +=
              (p.valor as number) *
              (this.simulacao.juros as number) *
              (atraso / 30);

            break;

          case TipoCalculo.Capitalizado:
            somaJuros +=
              (p.valor as number) *
              Math.pow(1 + (this.simulacao.juros as number), atraso / 30 - 1);

            break;
        }

        this.simulacao.totalJuros = somaJuros;
      });

      this.simulacao.totalDivida = parcelas.map((p) => p.valor as number).reduce((a, b) => a + b) + somaJuros;
      this.simulacao.dataInclusao = new Date();

      this.simulacaoService.criar(this.simulacao).subscribe();
    });
  }

  fechar(): void {
    this.reset();
    this.abrirCard = false;
    this.cardAberto.emit(this.abrirCard);
  }

  reset() : void {
    this.simulacao = new Simulacao();
    this.jurosControl.reset();
  }
}
