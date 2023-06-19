import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkProductComponent } from './milk-product.component';

describe('MilkProductComponent', () => {
  let component: MilkProductComponent;
  let fixture: ComponentFixture<MilkProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilkProductComponent]
    });
    fixture = TestBed.createComponent(MilkProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
