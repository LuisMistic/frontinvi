import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  toggleAccordion(id: string) {
    const content = document.getElementById(id);
    if (content) { // Verifica si content no es null o undefined
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        // Oculta todos los demás contenidos de acordeón
        const accordions = document.querySelectorAll('.accordion-content');
        accordions.forEach(acc => {
          if (acc.id !== id) {
            (acc as HTMLElement).style.display = 'none'; // Asegura que acc sea tratado como HTMLElement
          }
        });
        content.style.display = 'block';
      }
    }
  }
}
