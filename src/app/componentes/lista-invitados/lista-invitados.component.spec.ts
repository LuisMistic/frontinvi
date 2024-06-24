import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInvitadosComponent } from './lista-invitados.component';

describe('ListaInvitadosComponent', () => {
  let component: ListaInvitadosComponent;
  let fixture: ComponentFixture<ListaInvitadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaInvitadosComponent]
    });
    fixture = TestBed.createComponent(ListaInvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
