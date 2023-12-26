import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calcular-juros',
  templateUrl: './calcular-juros.component.html',
  styleUrl: './calcular-juros.component.css'
})
export class CalcularJurosComponent {

  @Input() abrirCard: boolean = false;
  @Output() cardAberto = new EventEmitter<boolean>();

  fechar() {
    this.abrirCard = false;
    this.cardAberto.emit(this.abrirCard);
  }
}
