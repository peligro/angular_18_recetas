import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasResultadosComponent } from './recetas-resultados.component';

describe('RecetasResultadosComponent', () => {
  let component: RecetasResultadosComponent;
  let fixture: ComponentFixture<RecetasResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetasResultadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
