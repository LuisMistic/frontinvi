import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService {
  private apiUrl = 'http://localhost:3000/invitados';

  constructor(private http: HttpClient) {}

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
}
