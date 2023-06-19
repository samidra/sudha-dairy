import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhaSmartComponent } from './sudha-smart.component';

describe('SudhaSmartComponent', () => {
  let component: SudhaSmartComponent;
  let fixture: ComponentFixture<SudhaSmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudhaSmartComponent]
    });
    fixture = TestBed.createComponent(SudhaSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
