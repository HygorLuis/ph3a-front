import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parcela } from '../models/parcela.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ParcelaService {

  private readonly API = 'http://localhost:3000/parcela';

  constructor(private httpCliente: HttpClient) { }

  listar(): Observable<Parcela[]> {
    return this.httpCliente.get<Parcela[]>(this.API);
  }

  criar(parcela: Parcela): Observable<Parcela> {
    return this.httpCliente.post<Parcela>(this.API, parcela)
  }

  atualizar(parcela: Parcela): Observable<Parcela> {
    return this.httpCliente.put<Parcela>(`${this.API}/${parcela.id}`, parcela)
  }

  excluir(idParcela: number): Observable<Parcela> {
    return this.httpCliente.delete<Parcela>(`${this.API}/${idParcela}`);
  }
}
