import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistroInvitadosComponent } from './componentes/registro-invitados/registro-invitados.component';
import { ListaInvitadosComponent } from './componentes/lista-invitados/lista-invitados.component';
import { StarsBackgroundComponent } from './componentes/stars-background/stars-background.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroInvitadosComponent,
    ListaInvitadosComponent,
    StarsBackgroundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
