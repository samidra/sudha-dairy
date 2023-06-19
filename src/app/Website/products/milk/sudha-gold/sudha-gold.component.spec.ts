import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhaGoldComponent } from './sudha-gold.component';

describe('SudhaGoldComponent', () => {
  let component: SudhaGoldComponent;
  let fixture: ComponentFixture<SudhaGoldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudhaGoldComponent]
    });
    fixture = TestBed.createComponent(SudhaGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
