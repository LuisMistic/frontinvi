import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicacionService } from 'src/comunicacion.service';

interface User {
  username: string;
  password: string;
  isAdmin: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  adminUsername: string = '';
  adminPassword: string = '';
  isAdminLoggedIn: boolean = false;
  newUsername: string = '';
  newPassword: string = '';
  isAdmin: boolean = false;

  users: User[] = [];  // Lista para almacenar los usuarios registrados

  constructor(private router: Router, private comunicacionServicio: ComunicacionService) {}

  loginAdmin() {
    const user = this.users.find(u => u.username === this.adminUsername && u.password === this.adminPassword);
    if (user) {
      this.isAdminLoggedIn = true;
      if (user.isAdmin) {
        this.router.navigateByUrl('/lista-invitados');
      } else {
        this.router.navigateByUrl('/registro');
      }
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }

  registerUser() {
    if (this.newUsername && this.newPassword) {
      const newUser: User = {
        username: this.newUsername,
        password: this.newPassword,
        isAdmin: this.isAdmin
      };
      this.users.push(newUser);
      alert('Usuario registrado con éxito.');
      this.newUsername = '';
      this.newPassword = '';
      this.isAdmin = false;
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  cambiarComponente(nombre: string) {
    if (nombre !== this.comunicacionServicio.currentComponent) {
      this.comunicacionServicio.cambiarComponente(nombre);
      console.log("Cambio de componente fue un éxito");
    }
  }
}
