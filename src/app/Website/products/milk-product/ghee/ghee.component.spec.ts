import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GheeComponent } from './ghee.component';

describe('GheeComponent', () => {
  let component: GheeComponent;
  let fixture: ComponentFixture<GheeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GheeComponent]
    });
    fixture = TestBed.createComponent(GheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
