import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimuladorComponent } from './components/simulador/simulador.component';
import { UltimasSimulacoesComponent } from './components/ultimas-simulacoes/ultimas-simulacoes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'simulador',
    pathMatch: 'full'
  },
  {
    path: 'simulador',
    component: SimuladorComponent
  },
  {
    path: 'ultimas-simulacoes',
    component: UltimasSimulacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
