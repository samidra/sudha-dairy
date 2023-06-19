import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkNazarComponent } from './ek-nazar.component';

describe('EkNazarComponent', () => {
  let component: EkNazarComponent;
  let fixture: ComponentFixture<EkNazarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EkNazarComponent]
    });
    fixture = TestBed.createComponent(EkNazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
