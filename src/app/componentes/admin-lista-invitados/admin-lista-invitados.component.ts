// admin-lista-invitados.component.ts
import { Component, OnInit } from '@angular/core';
import { InvitadoService } from '../invitado.service';

@Component({
  selector: 'app-admin-lista-invitados',
  templateUrl: './admin-lista-invitados.component.html',
  styleUrls: ['./admin-lista-invitados.component.css']
})
export class AdminListaInvitadosComponent implements OnInit {
  invitados: any[] = [];

  constructor(private invitadoService: InvitadoService) {}

  ngOnInit(): void {
    this.obtenerInvitados();
  }

  obtenerInvitados(): void {
    this.invitadoService.obtenerInvitados().subscribe(
      (data) => {
        this.invitados = data;
      },
      (error) => {
        console.error('Error al obtener los invitados', error);
      }
    );
  }

  actualizarInvitado(id: number, invitado: any): void {
    this.invitadoService.actualizarInvitado(id, invitado).subscribe(
      (data) => {
        console.log('Invitado actualizado', data);
      },
      (error) => {
        console.error('Error al actualizar el invitado', error);
      }
    );
  }

  eliminarInvitado(id: number): void {
    this.invitadoService.eliminarInvitado(id).subscribe(
      (data) => {
        console.log('Invitado eliminado', data);
        this.obtenerInvitados(); // Volver a cargar la lista de invitados después de eliminar uno
      },
      (error) => {
        console.error('Error al eliminar el invitado', error);
      }
    );
  }
}
