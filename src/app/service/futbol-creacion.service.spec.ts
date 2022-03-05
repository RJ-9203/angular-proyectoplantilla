import { TestBed } from '@angular/core/testing';

import { FutbolCreacionService } from './/futbol-creacion.service';

describe('FutbolCreacionService', () => {
  let service: FutbolCreacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutbolCreacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
