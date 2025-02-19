import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarTransferenciaComponent } from './agendar-transferencia/agendar-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';

const routes: Routes = [
  { path: '', redirectTo: '/agendar', pathMatch: 'full' },
  { path: 'agendar', component: AgendarTransferenciaComponent },
  { path: 'extrato', component: ExtratoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
