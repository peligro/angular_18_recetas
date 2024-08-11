import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEditarComponent } from './panel-editar.component';

describe('PanelEditarComponent', () => {
  let component: PanelEditarComponent;
  let fixture: ComponentFixture<PanelEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
