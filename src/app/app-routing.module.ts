import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncluirParcelaComponent } from './components/simulador/incluir-parcela/incluir-parcela.component';
import { SimuladorComponent } from './components/simulador/simulador.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'simulador',
    pathMatch: 'full'
  },
  {
    path: 'simulador',
    component: SimuladorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
