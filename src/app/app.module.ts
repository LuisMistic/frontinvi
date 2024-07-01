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
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminListaInvitadosComponent } from './componentes/admin-lista-invitados/admin-lista-invitados.component';
import { AuthService } from './componentes/auth.service';
import { PasswordGeneratorComponent } from './componentes/password-generator/password-generator.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroInvitadosComponent,
    ListaInvitadosComponent,
    StarsBackgroundComponent,
    EventoComponent,
    CountdownComponent,
    BaseComponent,
    LoginComponent,
    PasswordGeneratorComponent,
    AdminListaInvitadosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EventoModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
