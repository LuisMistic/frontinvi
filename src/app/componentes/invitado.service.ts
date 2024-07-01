import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService {
  currentComponent: string = 'default';
  private componenteCierreSubject = new BehaviorSubject<boolean>(false);
  private componenteActualSubject: BehaviorSubject<string> = new BehaviorSubject<string>('default');
  // private apiUrl = 'http://localhost:3000/invitados';
 private apiUrl = 'https://backevent.onrender.com/invitados'; // Actualiza la URL según tu backend en Render
  constructor(private http: HttpClient) {
    
  }

  obtenerInvitados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  registrarInvitado(invitado: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registro`, invitado);
  }

  actualizarInvitado(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  eliminarInvitado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  
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
