import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulabJamunComponent } from './gulab-jamun.component';

describe('GulabJamunComponent', () => {
  let component: GulabJamunComponent;
  let fixture: ComponentFixture<GulabJamunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GulabJamunComponent]
    });
    fixture = TestBed.createComponent(GulabJamunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
