import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsDriversTableComponent } from './teams-drivers-table.component';

describe('TeamsDriversTableComponent', () => {
  let component: TeamsDriversTableComponent;
  let fixture: ComponentFixture<TeamsDriversTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsDriversTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsDriversTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
