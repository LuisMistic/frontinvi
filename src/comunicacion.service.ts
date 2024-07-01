import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  currentComponent: string = 'default';
  private componenteCierreSubject = new BehaviorSubject<boolean>(false);
  private componenteActualSubject: BehaviorSubject<string> = new BehaviorSubject<string>('default');


  constructor() { }

  cambiarComponente(nombre: string) {
    this.notificarAnimacionCierre(true);
    this.componenteActualSubject.next(nombre);
    console.log("Notificación de cierre con éxito");
    setTimeout(() => {
      this.currentComponent = nombre;
      this.notificarAnimacionCierre(false);
    }, 900);
    console.log("El temporizador funciona correctamente");
  }


  notificarAnimacionCierre(animacion: boolean = false) {
    this.componenteCierreSubject.next(animacion);
    console.log("Notificación de cierre del servicio");
  }
  obtenerNotificacionCierre(): Observable<boolean> {
    return this.componenteCierreSubject.asObservable();
  }
  obtenerComponenteActual(): Observable<string> {
    return this.componenteActualSubject.asObservable();
  }


}
