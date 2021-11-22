import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePointsCounterComponent } from './life-points-counter.component';

describe('LifePointsCounterComponent', () => {
  let component: LifePointsCounterComponent;
  let fixture: ComponentFixture<LifePointsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifePointsCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifePointsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
