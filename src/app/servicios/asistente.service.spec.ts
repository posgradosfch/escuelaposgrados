import { TestBed, inject } from '@angular/core/testing';

import { AsistenteService } from './asistente.service';

describe('AsistenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsistenteService]
    });
  });

  it('should be created', inject([AsistenteService], (service: AsistenteService) => {
    expect(service).toBeTruthy();
  }));
});
