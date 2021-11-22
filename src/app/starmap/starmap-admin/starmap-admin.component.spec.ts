import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarmapAdminComponent } from './starmap-admin.component';

describe('StarmapAdminComponent', () => {
  let component: StarmapAdminComponent;
  let fixture: ComponentFixture<StarmapAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarmapAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarmapAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
