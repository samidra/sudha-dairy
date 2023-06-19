import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhaHeldiComponent } from './sudha-heldi.component';

describe('SudhaHeldiComponent', () => {
  let component: SudhaHeldiComponent;
  let fixture: ComponentFixture<SudhaHeldiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudhaHeldiComponent]
    });
    fixture = TestBed.createComponent(SudhaHeldiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
