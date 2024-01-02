import { Component, OnInit } from '@angular/core';
import { ParcelaService } from '../../services/parcela.service';
import { Parcela } from '../../models/parcela.model';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.css',
})
export class SimuladorComponent implements OnInit{
  cardParcelaAberto: boolean = false;
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

  abrirCardParcela(abrir: boolean, idParcela: number = 0) {
    this.parcelaSelecionada = idParcela > 0 ? this.parcelas.find((x) => x.id === idParcela) as Parcela : new Parcela();

    this.cardParcelaAberto = abrir;
    this.listarParcelas();
  }

  abrirCardCalcularJuros(abrir: boolean): void {
    if (!abrir)
      this.parcelaSelecionada = new Parcela();

    this.cardCalcularJurosAberto = abrir;
  }

  excluirParcela(idParcela: number) {
    this.service.excluir(idParcela).subscribe(() => {
      this.listarParcelas();
    });
  }
}
