import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainDahiComponent } from './plain-dahi.component';

describe('PlainDahiComponent', () => {
  let component: PlainDahiComponent;
  let fixture: ComponentFixture<PlainDahiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlainDahiComponent]
    });
    fixture = TestBed.createComponent(PlainDahiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
