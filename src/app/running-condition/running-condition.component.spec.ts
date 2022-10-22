import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningConditionComponent } from './running-condition.component';

describe('RunningConditionComponent', () => {
  let component: RunningConditionComponent;
  let fixture: ComponentFixture<RunningConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
