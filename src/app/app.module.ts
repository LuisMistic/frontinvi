import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistroInvitadosComponent } from './componentes/registro-invitados/registro-invitados.component';
import { ListaInvitadosComponent } from './componentes/lista-invitados/lista-invitados.component';
import { StarsBackgroundComponent } from './componentes/stars-background/stars-background.component';
import { EventoComponent } from './componentes/evento/evento.component';
import { EventoModule } from './componentes/evento/evento.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountdownComponent } from './componentes/countdown/countdown.component';







@NgModule({
  declarations: [
    AppComponent,
    RegistroInvitadosComponent,
    ListaInvitadosComponent,
    StarsBackgroundComponent,
    EventoComponent,
    CountdownComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EventoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
