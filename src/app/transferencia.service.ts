import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transferencia {
  contaOrigem: string;
  contaDestino: string;
  valor: number;
  dias: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private apiUrl = '/api/transferencias';

  constructor(private http: HttpClient) { }

  agendarTransferencia(transferencia: Transferencia): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl + '/agendar', transferencia, { headers });
  }

  obterExtrato(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.apiUrl + '/extrato');
  }
}
