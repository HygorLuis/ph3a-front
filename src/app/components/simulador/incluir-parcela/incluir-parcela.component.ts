import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parcela } from '../../../models/parcela.model';
import { ParcelaService } from '../../../services/parcela.service';

@Component({
  selector: 'app-incluir-parcela',
  templateUrl: './incluir-parcela.component.html',
  styleUrl: './incluir-parcela.component.css',
})
export class IncluirParcelaComponent {
  @Input() abrirCard: boolean = false;
  @Output() cardAberto = new EventEmitter<boolean>();
  parcela = new Parcela();

  constructor(private service: ParcelaService) {}

  ngOnInit(): void {}

  salvar() {
    this.parcela.dataInclusao = new Date();
    this.service.criar(this.parcela).subscribe(() => {
      this.fechar();
    })
  }

  fechar(): void {
    this.parcela = new Parcela();
    this.abrirCard = false;
    this.cardAberto.emit(this.abrirCard);
  }
}
