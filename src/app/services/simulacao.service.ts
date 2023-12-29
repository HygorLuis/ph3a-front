import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Simulacao } from '../models/simulacao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulacaoService {

  private readonly API = 'http://localhost:3000/simulacao';

  constructor(private httpCliente: HttpClient) { }

  listar(): Observable<Simulacao[]> {
    return this.httpCliente.get<Simulacao[]>(this.API);
  }

  criar(simulacao: Simulacao): Observable<Simulacao> {
    return this.httpCliente.post<Simulacao>(this.API, simulacao)
  }
}
