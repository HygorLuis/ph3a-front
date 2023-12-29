import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CalcularJurosComponent } from './components/simulador/calcular-juros/calcular-juros.component';
import { IncluirParcelaComponent } from './components/simulador/incluir-parcela/incluir-parcela.component';
import { SimuladorComponent } from './components/simulador/simulador.component';
import { AlterarParcelaComponent } from './components/simulador/alterar-parcela/alterar-parcela.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UltimasSimulacoesComponent } from './components/ultimas-simulacoes/ultimas-simulacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalcularJurosComponent,
    IncluirParcelaComponent,
    SimuladorComponent,
    AlterarParcelaComponent,
    UltimasSimulacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
