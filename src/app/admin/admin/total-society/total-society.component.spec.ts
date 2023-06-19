import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSocietyComponent } from './total-society.component';

describe('TotalSocietyComponent', () => {
  let component: TotalSocietyComponent;
  let fixture: ComponentFixture<TotalSocietyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalSocietyComponent]
    });
    fixture = TestBed.createComponent(TotalSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
