import { TestBed, inject } from '@angular/core/testing';

import { ValidarCodigoService } from './validar-codigo.service';

describe('ValidarCodigoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidarCodigoService]
    });
  });

  it('should be created', inject([ValidarCodigoService], (service: ValidarCodigoService) => {
    expect(service).toBeTruthy();
  }));
});
