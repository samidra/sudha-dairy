import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingAreaComponent } from './marketing-area.component';

describe('MarketingAreaComponent', () => {
  let component: MarketingAreaComponent;
  let fixture: ComponentFixture<MarketingAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingAreaComponent]
    });
    fixture = TestBed.createComponent(MarketingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
