import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroInvitadosComponent } from './componentes/registro-invitados/registro-invitados.component';
import { ListaInvitadosComponent } from './componentes/lista-invitados/lista-invitados.component';


const routes: Routes = [
  { path: 'registro', component: RegistroInvitadosComponent },
  { path: 'lista-invitados', component: ListaInvitadosComponent },
  { path: '', redirectTo: '/registro', pathMatch: 'full' },
  { path: '**', redirectTo: '/registro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
