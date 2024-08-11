import { TestBed } from '@angular/core/testing';

import { RecetaStateService } from './receta-state.service';

describe('RecetaStateService', () => {
  let service: RecetaStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
