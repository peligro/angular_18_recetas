import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasDetalleComponent } from './recetas-detalle.component';

describe('RecetasDetalleComponent', () => {
  let component: RecetasDetalleComponent;
  let fixture: ComponentFixture<RecetasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetasDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
