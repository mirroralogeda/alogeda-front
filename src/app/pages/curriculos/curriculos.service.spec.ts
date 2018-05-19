import { TestBed, inject } from '@angular/core/testing';

import { CurriculosService } from './curriculos.service';

describe('CurriculosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurriculosService]
    });
  });

  it('should be created', inject([CurriculosService], (service: CurriculosService) => {
    expect(service).toBeTruthy();
  }));
});
