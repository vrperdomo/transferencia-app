import { Component, OnInit } from '@angular/core';
import { TransferenciaService, Transferencia } from '../transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html'
})
export class ExtratoComponent implements OnInit {
  extrato: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit() {
    this.transferenciaService.obterExtrato().subscribe(data => {
      this.extrato = data;
    });
  }
}
