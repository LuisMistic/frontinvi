import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInvitadosComponent } from './registro-invitados.component';

describe('RegistroInvitadosComponent', () => {
  let component: RegistroInvitadosComponent;
  let fixture: ComponentFixture<RegistroInvitadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroInvitadosComponent]
    });
    fixture = TestBed.createComponent(RegistroInvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
