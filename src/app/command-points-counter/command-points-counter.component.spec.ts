import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPointsCounterComponent } from './command-points-counter.component';

describe('CommandPointsCounterComponent', () => {
  let component: CommandPointsCounterComponent;
  let fixture: ComponentFixture<CommandPointsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandPointsCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandPointsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
