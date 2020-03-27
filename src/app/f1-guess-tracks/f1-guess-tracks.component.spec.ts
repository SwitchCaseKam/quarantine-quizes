import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1GuessTracksComponent } from './f1-guess-tracks.component';

describe('F1GuessTracksComponent', () => {
  let component: F1GuessTracksComponent;
  let fixture: ComponentFixture<F1GuessTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1GuessTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1GuessTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
