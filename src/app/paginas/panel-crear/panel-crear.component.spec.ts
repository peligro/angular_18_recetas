import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearComponent } from './panel-crear.component';

describe('PanelCrearComponent', () => {
  let component: PanelCrearComponent;
  let fixture: ComponentFixture<PanelCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
