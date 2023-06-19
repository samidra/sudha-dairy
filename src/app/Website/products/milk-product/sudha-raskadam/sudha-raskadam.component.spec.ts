import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhaRaskadamComponent } from './sudha-raskadam.component';

describe('SudhaRaskadamComponent', () => {
  let component: SudhaRaskadamComponent;
  let fixture: ComponentFixture<SudhaRaskadamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudhaRaskadamComponent]
    });
    fixture = TestBed.createComponent(SudhaRaskadamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
