import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Parcela } from '../../../models/parcela.model';
import { ParcelaService } from '../../../services/parcela.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParcelaForm } from './parcela-form';

@Component({
  selector: 'app-cadastro-parcela',
  templateUrl: './cadastro-parcela.component.html',
  styleUrl: './cadastro-parcela.component.css',
})
export class CadastroParcelaComponent implements OnInit {

  @Input() abrirCard: boolean = false;
  @Input() parcelaSelecionada!: Parcela;
  @Output() cardAberto = new EventEmitter<boolean>();

  parcela = new Parcela();
  submitted: boolean = false;
  inputParcelaIsFocus: boolean = false;
  inputValorIsFocus: boolean = false;
  inputDataVencimentoIsFocus: boolean = false;
  inputType: string = 'text';

  parcelaForm = new FormGroup<ParcelaForm>({
    parcela: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(999),
    ]),
    valor: new FormControl('', [Validators.required, Validators.min(0.01)]),
    dataVencimento: new FormControl('', [Validators.required]),
  });

  constructor(private service: ParcelaService) {}

  ngOnInit(): void {
    this.parcelaForm.valueChanges.subscribe((values) => {
      this.parcela.parcela = values.parcela as number;
      this.parcela.valor = values.valor as number;
      this.parcela.dataVencimento = values.dataVencimento as Date;
    });

    if (this.parcelaSelecionada?.id > 0) {
      this.parcelaForm.patchValue({
        parcela: this.parcelaSelecionada.parcela as number,
        valor: this.parcelaSelecionada.valor as number,
        dataVencimento: this.parcelaSelecionada.dataVencimento as Date,
      });

      this.inputType = 'date';
      this.parcela = this.parcelaSelecionada;
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.parcelaForm.invalid) return;

    if (this.parcelaSelecionada.id > 0) {
      this.service.atualizar(this.parcela).subscribe(() => {
        this.fechar();
      });
    } else {
      this.parcela.dataInclusao = new Date();
      this.service.criar(this.parcela).subscribe(() => {
        this.fechar();
      });
    }
  }

  fechar(): void {
    this.abrirCard = false;
    this.cardAberto.emit(this.abrirCard);
  }

  onFocus(): void {
    this.inputDataVencimentoIsFocus = true;
    this.inputType = 'date';
  }

}
