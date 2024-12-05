import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuariosComponenteComponent } from './lista-usuarios-componente.component';

describe('ListaUsuariosComponenteComponent', () => {
  let component: ListaUsuariosComponenteComponent;
  let fixture: ComponentFixture<ListaUsuariosComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUsuariosComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUsuariosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
