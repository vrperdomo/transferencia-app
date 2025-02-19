import { Component } from '@angular/core';
import { TransferenciaService, Transferencia } from '../transferencia.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agendar-transferencia',
  templateUrl: './agendar-transferencia.component.html'
})
export class AgendarTransferenciaComponent {
  transferencia: Transferencia = { contaOrigem: '', contaDestino: '', valor: 0, dias: 0 };

  constructor(private transferenciaService: TransferenciaService) { }

  agendar() {
    this.transferenciaService.agendarTransferencia(this.transferencia).subscribe(
      response => {
       
       this.transferencia = { contaOrigem: '', contaDestino: '', valor: 0, dias: 0 }; // Limpar o formulário
      },
      (error: HttpErrorResponse) => {
        alert(error.error);
      }
    );
  }
}
