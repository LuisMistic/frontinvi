// registro-invitados.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvitadoService } from '../invitado.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro-invitados',
  templateUrl: './registro-invitados.component.html',
  styleUrls: ['./registro-invitados.component.css'],
})
export class RegistroInvitadosComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private invitadoService: InvitadoService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo_electronico: ['', [Validators.required, Validators.email]],
    });
  }

  registrarInvitado() {
    if (this.registroForm.valid) {
      const invitadoData = this.registroForm.value;
      this.invitadoService.registrarInvitado(invitadoData).subscribe({
        next: (response) => {
          console.log('Invitado registrado:', response);
          this.registroForm.reset(); // Resetear el formulario después del registro
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error al registrar el invitado:', error);
          // Manejar el error según sea necesario en el frontend
          // Por ejemplo, mostrar un mensaje de error al usuario
        }
      });
    }
  }
}
