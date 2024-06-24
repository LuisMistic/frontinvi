import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaInvitacionComponent } from './tarjeta-invitacion.component';

describe('TarjetaInvitacionComponent', () => {
  let component: TarjetaInvitacionComponent;
  let fixture: ComponentFixture<TarjetaInvitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaInvitacionComponent]
    });
    fixture = TestBed.createComponent(TarjetaInvitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
