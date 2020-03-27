import { TestBed } from '@angular/core/testing';

import { F1GuessTracksService } from './f1-guess-tracks.service';

describe('F1GuessTracksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: F1GuessTracksService = TestBed.get(F1GuessTracksService);
    expect(service).toBeTruthy();
  });
});
