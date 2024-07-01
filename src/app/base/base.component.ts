import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/comunicacion.service';
import { Router } from '@angular/router';
import { AuthService } from '../componentes/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  
  isAdminLoggedIn: boolean = false; // Propiedad para verificar si el administrador está autenticado

  constructor(
    public comunicacionServicio: ComunicacionService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Verificar el estado de la autenticación del administrador al inicializar el componente
    this.isAdminLoggedIn = this.authService.isLoggedIn(); // Supongamos que AuthService tiene un método isLoggedIn() que devuelve true si el administrador está autenticado
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
