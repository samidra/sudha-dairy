import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalushahiComponent } from './balushahi.component';

describe('BalushahiComponent', () => {
  let component: BalushahiComponent;
  let fixture: ComponentFixture<BalushahiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalushahiComponent]
    });
    fixture = TestBed.createComponent(BalushahiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
