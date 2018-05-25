import { TestBed, inject } from '@angular/core/testing';

import { SetoresService } from './setores.service';

describe('SetoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetoresService]
    });
  });

  it('should be created', inject([SetoresService], (service: SetoresService) => {
    expect(service).toBeTruthy();
  }));
});
