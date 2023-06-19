import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBmcComponent } from './total-bmc.component';

describe('TotalBmcComponent', () => {
  let component: TotalBmcComponent;
  let fixture: ComponentFixture<TotalBmcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalBmcComponent]
    });
    fixture = TestBed.createComponent(TotalBmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
