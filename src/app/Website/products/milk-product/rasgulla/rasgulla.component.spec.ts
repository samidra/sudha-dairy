import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasgullaComponent } from './rasgulla.component';

describe('RasgullaComponent', () => {
  let component: RasgullaComponent;
  let fixture: ComponentFixture<RasgullaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RasgullaComponent]
    });
    fixture = TestBed.createComponent(RasgullaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
