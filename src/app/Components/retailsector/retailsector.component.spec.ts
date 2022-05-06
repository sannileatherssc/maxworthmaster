import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailsectorComponent } from './retailsector.component';

describe('RetailsectorComponent', () => {
  let component: RetailsectorComponent;
  let fixture: ComponentFixture<RetailsectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailsectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
