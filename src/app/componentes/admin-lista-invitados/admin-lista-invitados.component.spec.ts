import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListaInvitadosComponent } from './admin-lista-invitados.component';

describe('AdminListaInvitadosComponent', () => {
  let component: AdminListaInvitadosComponent;
  let fixture: ComponentFixture<AdminListaInvitadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminListaInvitadosComponent]
    });
    fixture = TestBed.createComponent(AdminListaInvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
