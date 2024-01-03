import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CalcularJurosComponent } from './components/simulador/calcular-juros/calcular-juros.component';
import { CadastroParcelaComponent } from './components/simulador/cadastro-parcela/cadastro-parcela.component';
import { SimuladorComponent } from './components/simulador/simulador.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UltimasSimulacoesComponent } from './components/ultimas-simulacoes/ultimas-simulacoes.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalcularJurosComponent,
    CadastroParcelaComponent,
    SimuladorComponent,
    UltimasSimulacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
