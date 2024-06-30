import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private bandasMusicaSubject = new BehaviorSubject<string[]>([]);
  bandasMusica$ = this.bandasMusicaSubject.asObservable();

  private comidaMexicanaSubject = new BehaviorSubject<string[]>([]);
  comidaMexicana$ = this.comidaMexicanaSubject.asObservable();

  private cervezaArtesanalSubject = new BehaviorSubject<string[]>([]);
  cervezaArtesanal$ = this.cervezaArtesanalSubject.asObservable();

  constructor() {
    // Simular datos iniciales (puedes reemplazar con datos reales obtenidos de una API)
    this.bandasMusicaSubject.next(['Banda 1', 'Banda 2', 'Banda 3']);
    this.comidaMexicanaSubject.next(['Taco', 'Enchilada', 'Guacamole']);
    this.cervezaArtesanalSubject.next(['IPA', 'Stout', 'Pale Ale']);
  }

  actualizarBandasMusica(bandas: string[]) {
    this.bandasMusicaSubject.next(bandas);
  }

  actualizarComidaMexicana(platos: string[]) {
    this.comidaMexicanaSubject.next(platos);
  }

  actualizarCervezaArtesanal(cervezas: string[]) {
    this.cervezaArtesanalSubject.next(cervezas);
  }
}
