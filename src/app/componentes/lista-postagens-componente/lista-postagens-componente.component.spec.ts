import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostagensComponenteComponent } from './lista-postagens-componente.component';

describe('ListaPostagensComponenteComponent', () => {
  let component: ListaPostagensComponenteComponent;
  let fixture: ComponentFixture<ListaPostagensComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPostagensComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPostagensComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
