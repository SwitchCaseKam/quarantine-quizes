import { TestBed } from '@angular/core/testing';

import { F1GuessDriversService } from './f1-guess-drivers.service';

describe('F1GuessDriversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: F1GuessDriversService = TestBed.get(F1GuessDriversService);
    expect(service).toBeTruthy();
  });
});
