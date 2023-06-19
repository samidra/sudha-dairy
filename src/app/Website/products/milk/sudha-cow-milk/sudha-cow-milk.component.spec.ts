import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhaCowMilkComponent } from './sudha-cow-milk.component';

describe('SudhaCowMilkComponent', () => {
  let component: SudhaCowMilkComponent;
  let fixture: ComponentFixture<SudhaCowMilkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudhaCowMilkComponent]
    });
    fixture = TestBed.createComponent(SudhaCowMilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
