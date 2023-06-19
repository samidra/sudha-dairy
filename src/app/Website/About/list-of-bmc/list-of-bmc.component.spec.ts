import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBmcComponent } from './list-of-bmc.component';

describe('ListOfBmcComponent', () => {
  let component: ListOfBmcComponent;
  let fixture: ComponentFixture<ListOfBmcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfBmcComponent]
    });
    fixture = TestBed.createComponent(ListOfBmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
