import { TestBed } from '@angular/core/testing';

import { CommonQuizService } from './common-quiz.service';

describe('CommonQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonQuizService = TestBed.get(CommonQuizService);
    expect(service).toBeTruthy();
  });
});
