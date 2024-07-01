import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroInvitadosComponent } from './componentes/registro-invitados/registro-invitados.component';
import { ListaInvitadosComponent } from './componentes/lista-invitados/lista-invitados.component';
import { EventoComponent } from './componentes/evento/evento.component'; // Asegúrate de importar EventoComponent aquí si es necesario

const routes: Routes = [
  { path: 'registro', component: RegistroInvitadosComponent },
  { path: 'lista-invitados', component: ListaInvitadosComponent },
  { path: 'evento', component: EventoComponent }, // Ruta para el componente de Evento
  { path: '', redirectTo: '/registro', pathMatch: 'full' }, // Redirige a /registro si la ruta está vacía
  { path: '**', redirectTo: '/registro' } // Redirige a /registro si la ruta no se encuentra
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
