import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-invitacion',
  templateUrl: './tarjeta-invitacion.component.html',
  styleUrls: ['./tarjeta-invitacion.component.css'],
})
export class TarjetaInvitacionComponent {
  @Input() nombreEvento!: string;
  @Input() nombreInvitado!: string;
  @Input() numeroInvitacion!: number;
}
