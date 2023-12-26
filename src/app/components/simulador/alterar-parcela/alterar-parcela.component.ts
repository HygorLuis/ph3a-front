import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parcela } from '../../../models/parcela.model';
import { ParcelaService } from '../../../services/parcela.service';

@Component({
  selector: 'app-alterar-parcela',
  templateUrl: './alterar-parcela.component.html',
  styleUrl: './alterar-parcela.component.css',
})
export class AlterarParcelaComponent {
  @Input() abrirCard: boolean = false;
  @Input() alterarParcela!: Parcela;
  @Output() cardAberto = new EventEmitter<boolean>();

  constructor(private service: ParcelaService) {}

  salvar(): void {
    console.log(`this.alterarParcela: ${this.alterarParcela}`);
    this.service.atualizar(this.alterarParcela).subscribe(() => {
      this.fechar();
    })
  }

  fechar(): void {
    this.abrirCard = false;
    this.cardAberto.emit(this.abrirCard);
  }
}
