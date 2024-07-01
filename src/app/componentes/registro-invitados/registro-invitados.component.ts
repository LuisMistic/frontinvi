import { Component, } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvitadoService } from '../invitado.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { ComunicacionService } from 'src/comunicacion.service';

@Component({
  selector: 'app-registro-invitados',
  templateUrl: './registro-invitados.component.html',
  styleUrls: ['./registro-invitados.component.css'],
  animations: [
    trigger('slideOut', [
      state('in', style({ transform: 'translateY(0)' })),
      state('out', style({ transform: 'translateY(100%)' })),
      transition('in => out', [
        animate('0.5s ease-in-out')
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s ease-in-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('blink', [
      state('normal', style({})),
      state('blink', style({})),
      transition('normal <=> blink', [
        animate(
          '1s',
          keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0.5, offset: 0.5 }),
            style({ opacity: 1, offset: 1 })
          ])
        )
      ])
    ])
  ]
})

export class RegistroInvitadosComponent  {
  registroForm: FormGroup;
  registroExitoso: boolean = false; // Estado de confirmación de registro
  nombreInvitado: string = ''; // Nombre del invitado registrado
  mostrarMensaje: boolean = false; // Mostrar mensaje de éxito
  showCountdown: boolean = false; // Mostrar cuenta regresiva
  countdownNumbers: number[] = [6, 5, 4, 3, 2, 1, 0]; // Números para la cuenta regresiva
  countdownNumber: number | null = null; // Número actual en la cuenta regresiva
  containerState: string = 'in'; // Estado de la animación del contenedor
  mensajeAlerta: string = ''; // Mensaje de alerta en caso de error
  textoMostrado: string = '';
  textoFinal: string = '2024 ¡Vos sabes lo que es bueno!!'; // Texto final que se mostrará completamente
  textoTerminado: boolean = false; // Bandera para controlar la visibilidad del texto de máquina de escribir
  initialLoad: boolean = true; // Nuevo estado para controlar la carga inicial
  textoAdicional: string = 'Tu confirmación al evento nos organiza. Y si te llegó el enlace es porque queremos que estes! es una invitacion especial';
  textoAdicionalMostrado: string = '';
  correoError: boolean = false;
  mostrarRegistro: boolean = true; // Variable para controlar la visibilidad del registro
  mostrarEvento: boolean = false; // Variable para controlar la visibilidad del evento

  constructor(private fb: FormBuilder, private invitadoService: InvitadoService, private router: Router, public comunicacionService: ComunicacionService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo_electronico: ['', [Validators.required, Validators.email]],
    });
     // Observar cambios de ruta para controlar la carga inicial
  }
  
  
  
  ngOnInit(): void {
    // Iniciar el efecto de máquina de escribir solo en la carga inicial
    if (this.initialLoad) {
      this.typewriterEffect();
    }
  }

  typewriterEffect() {
    const delay = 60;
    let index = 0;
  
    const intervalId = setInterval(() => {
      this.textoMostrado = this.textoFinal.substring(0, index);
      index++;
  
      if (index > this.textoFinal.length) {
        clearInterval(intervalId);
        this.textoTerminado = true;
  
        setTimeout(() => {
          this.startAdditionalTextEffect(); // Llamar al efecto de máquina de escribir para el texto adicional después de que termine el texto principal
        }, 300); // Ajusta este tiempo según la duración del texto principal
  
        // Agregar lógica para ocultar el texto inicial
        setTimeout(() => {
          this.textoMostrado = ''; // Limpiar el texto mostrado para ocultarlo
        }, 2000); // Ajusta este tiempo según la duración de la animación inicial
      }
    }, delay);
  }
  
 

  startAdditionalTextEffect() {
    const delay = 3;
    let index = 0;

    const intervalId = setInterval(() => {
      this.textoAdicionalMostrado = this.textoAdicional.substring(0, index);
      index++;

      if (index > this.textoAdicional.length) {
        clearInterval(intervalId);
      }
    }, delay);
  }
 
  resetTypewriterEffect() {
    this.textoMostrado = '';
    this.textoTerminado = false;
    this.textoAdicionalMostrado = ''; // Reiniciar texto adicional al volver a la página de registro
  }
  registrarInvitado() {
    if (this.registroForm.valid) {
      const invitadoData = this.registroForm.value;
 // Verificación del correo electrónico
 if (!this.registroForm.get('correo_electronico')?.valid) {
  this.correoError = true;
  return;
}
      // Mostrar los carteles y la animación de cuenta regresiva inmediatamente
      this.registroExitoso = true;
      this.nombreInvitado = invitadoData.nombre;
      this.registroForm.reset(); // Limpiar el formulario después del registro
      this.mostrarMensaje = true;
      this.showCountdown = true;
      this.startCountdown();

      // Llamar al servicio para registrar al invitado y enviar el correo electrónico
      this.invitadoService.registrarInvitado(invitadoData).subscribe({
        next: (response) => {
          console.log('Invitado registrado:', response);
          // Simulación de envío de correo electrónico
          this.enviarCorreoElectronico(invitadoData.correo_electronico);
          this.cambiarComponente('evento')
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error al registrar el invitado:', error);
          this.mostrarMensaje = true;
          if (error.status === 409) {
            this.mensajeAlerta = 'El invitado ya está registrado.';
          } else {
            this.mensajeAlerta = 'Error al registrar el invitado. Intente nuevamente.';
          }
        }
      });
    }
  }

  enviarCorreoElectronico(correo: string) {
    // Lógica simulada para el envío del correo electrónico
    console.log('Simulando envío de correo electrónico a:', correo);
    // Aquí iría la llamada real al servicio para enviar el correo

    // Simulación de respuesta exitosa
    setTimeout(() => {
      console.log('Correo electrónico enviado correctamente.');
    }, 2000); // Simulación de 2 segundos para el envío del correo
  }

  startCountdown() {
    let count = this.countdownNumbers.length - 1;
    this.countdownNumber = null;

    const countdownInterval = setInterval(() => {
      this.countdownNumber = this.countdownNumbers[count];
      count--;

      if (count < 0) {
        clearInterval(countdownInterval);
        this.containerState = 'out';
        setTimeout(() => {
          this.verEvento();
        }, 1000);
      }
    }, 1000);
  }

  verEvento() {
    setTimeout(() => {
      this.router.navigate(['/evento']);
    }, 200); // Duración de la animación
  }

  onFocus(field: string) {
    this.registroForm.get(field)?.setValidators(Validators.required);
    this.registroForm.get(field)?.updateValueAndValidity();
    this.registroForm.get(field)?.markAsTouched();
  }

  onBlur(field: string) {
    this.registroForm.get(field)?.clearValidators();
    this.registroForm.get(field)?.updateValueAndValidity();
  }
   // Nueva función para manejar el evento input en el campo de correo
   onCorreoInput() {
    if (this.correoError) {
      this.correoError = false;
    }
  }
  validarCorreoConArroba(control: AbstractControl): { [key: string]: any } | null {
    const correo = control.value;
    if (correo && !correo.includes('@')) {
      return { 'sinArroba': true };
    }
    return null;
  }
  navigateToEventos() {
    this.router.navigate(['/evento']);
    localStorage.setItem('lastVisited', '/evento'); // Almacena la última página visitada en localStorage
  }
  toggleSeccion(seccion: string) {
    if (seccion === 'registro') {
      this.mostrarRegistro = true;
      this.mostrarEvento = false;
    } else if (seccion === 'evento') {
      this.mostrarRegistro = false;
      this.mostrarEvento = true;
    }
  }
  irAEvento() {
    // Aquí puedes agregar lógica adicional si la necesitas antes de redirigir
    // Por ejemplo, validar el formulario antes de navegar
    this.router.navigateByUrl('/registro'); // Mantenemos en la misma ruta
  }
  public cambiarComponente(nombre: string) {
    if (nombre !== this.comunicacionService.currentComponent) {
        this.comunicacionService.cambiarComponente(nombre);
        console.log("Cambio de componente fue un éxito");
    }
}
}
