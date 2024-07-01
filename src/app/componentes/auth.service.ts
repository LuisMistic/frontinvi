import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isAdmin(): boolean {
    // Lógica para verificar si el usuario es administrador
    // Puedes implementar tu lógica específica aquí
    return true;  // Cambia esta lógica según tus necesidades
  }

  login(username: string, password: string): boolean {
    // Lógica de autenticación (simulada)
    if (username === 'admin' && password === 'admin') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
