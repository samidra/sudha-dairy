import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUnitsComponent } from './total-units.component';

describe('TotalUnitsComponent', () => {
  let component: TotalUnitsComponent;
  let fixture: ComponentFixture<TotalUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalUnitsComponent]
    });
    fixture = TestBed.createComponent(TotalUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
