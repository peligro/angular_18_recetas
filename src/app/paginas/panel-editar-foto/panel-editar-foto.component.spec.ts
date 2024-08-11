import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEditarFotoComponent } from './panel-editar-foto.component';

describe('PanelEditarFotoComponent', () => {
  let component: PanelEditarFotoComponent;
  let fixture: ComponentFixture<PanelEditarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelEditarFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelEditarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
