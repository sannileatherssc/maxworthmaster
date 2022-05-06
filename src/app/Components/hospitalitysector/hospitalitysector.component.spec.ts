import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalitysectorComponent } from './hospitalitysector.component';

describe('HospitalitysectorComponent', () => {
  let component: HospitalitysectorComponent;
  let fixture: ComponentFixture<HospitalitysectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalitysectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalitysectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
