import { Component, OnInit } from '@angular/core';
import { ParcelaService } from '../../services/parcela.service';
import { Parcela } from '../../models/parcela.model';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.css',
})
export class SimuladorComponent implements OnInit{
  cardIncluirParcelaAberto: boolean = false;
  cardAlterarParcelaAberto: boolean = false;
  cardCalcularJurosAberto: boolean = false;
  parcelaSelecionada = new Parcela();
  parcelas: Parcela[] = [];

  constructor(private service: ParcelaService) {}

  ngOnInit(): void {
    this.listarParcelas();
  }

  listarParcelas(): void {
    this.service.listar().subscribe((listParcelas) => {
      this.parcelas = listParcelas;
    });
  }

  abrirCardIncluirParcela(abrir: boolean) {
    this.cardIncluirParcelaAberto = abrir;
    this.listarParcelas();
  }

  abrirCardAlterarParcela(abrir: boolean): void {
    if (!abrir)
      this.parcelaSelecionada = new Parcela();

    this.cardAlterarParcelaAberto = abrir;
    this.listarParcelas();
  }

  abrirCardCalcularJuros(abrir: boolean): void {
    if (!abrir)
      this.parcelaSelecionada = new Parcela();

    console.log('abrir calculo juros:' + abrir);
    this.cardCalcularJurosAberto = abrir;
  }

  alterarParcela(idParcela: number) {
    this.parcelaSelecionada = this.parcelas.find((x) => x.id === idParcela) as Parcela;

    console.log('abrir parcela:' + true);
    this.abrirCardAlterarParcela(true);
  }

  excluirParcela(idParcela: number) {
    this.service.excluir(idParcela).subscribe(() => {
      this.listarParcelas();
    });
  }
}
