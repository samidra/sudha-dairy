import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneerComponent } from './paneer.component';

describe('PaneerComponent', () => {
  let component: PaneerComponent;
  let fixture: ComponentFixture<PaneerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaneerComponent]
    });
    fixture = TestBed.createComponent(PaneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
