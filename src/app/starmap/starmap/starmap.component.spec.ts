import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarMapComponent } from './starmap.component';

describe('StarMapComponent', () => {
  let component: StarMapComponent;
  let fixture: ComponentFixture<StarMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
