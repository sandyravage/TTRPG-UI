import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEffectsDisplayComponent } from './status-effects-display.component';

describe('StatusEffectsDisplayComponent', () => {
  let component: StatusEffectsDisplayComponent;
  let fixture: ComponentFixture<StatusEffectsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusEffectsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusEffectsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
