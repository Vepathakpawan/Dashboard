import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineSelectionsComponent } from './machine-selections.component';

describe('MachineSelectionsComponent', () => {
  let component: MachineSelectionsComponent;
  let fixture: ComponentFixture<MachineSelectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineSelectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
