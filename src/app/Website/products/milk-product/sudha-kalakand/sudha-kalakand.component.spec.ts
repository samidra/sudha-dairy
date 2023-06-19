import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhaKalakandComponent } from './sudha-kalakand.component';

describe('SudhaKalakandComponent', () => {
  let component: SudhaKalakandComponent;
  let fixture: ComponentFixture<SudhaKalakandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudhaKalakandComponent]
    });
    fixture = TestBed.createComponent(SudhaKalakandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
