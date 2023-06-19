import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhaShaktiComponent } from './sudha-shakti.component';

describe('SudhaShaktiComponent', () => {
  let component: SudhaShaktiComponent;
  let fixture: ComponentFixture<SudhaShaktiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudhaShaktiComponent]
    });
    fixture = TestBed.createComponent(SudhaShaktiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
