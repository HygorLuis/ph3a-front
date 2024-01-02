import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Parcela } from '../../../models/parcela.model';
import { ParcelaService } from '../../../services/parcela.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  form: FormGroup;

  constructor(private service: ParcelaService, private fb: FormBuilder) {
    this.form = this.fb.group({
      parcela: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(999),
      ]),
      valor: new FormControl('', [Validators.required, Validators.min(0.01)]),
      dataVencimento: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((values) => {
      this.parcela.parcela = values.parcela;
      this.parcela.valor = values.valor;
      this.parcela.dataVencimento = values.dataVencimento;
    });

    if (this.parcelaSelecionada?.id > 0) {
      this.form.patchValue({
        parcela: this.parcelaSelecionada.parcela,
        valor: this.parcelaSelecionada.valor,
        dataVencimento: this.parcelaSelecionada.dataVencimento,
      });

      this.parcela = this.parcelaSelecionada;
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) return;

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
    this.reset();
    this.abrirCard = false;
    this.cardAberto.emit(this.abrirCard);
  }

  reset(): void {
    this.submitted = false;
    this.parcela = new Parcela();
  }
}
