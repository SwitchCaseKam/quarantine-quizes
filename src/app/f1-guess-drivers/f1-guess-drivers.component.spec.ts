import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1GuessDriversComponent } from './f1-guess-drivers.component';

describe('F1GuessDriversComponent', () => {
  let component: F1GuessDriversComponent;
  let fixture: ComponentFixture<F1GuessDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1GuessDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1GuessDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
