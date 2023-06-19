import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhaMistiDoiComponent } from './sudha-misti-doi.component';

describe('SudhaMistiDoiComponent', () => {
  let component: SudhaMistiDoiComponent;
  let fixture: ComponentFixture<SudhaMistiDoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudhaMistiDoiComponent]
    });
    fixture = TestBed.createComponent(SudhaMistiDoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
