import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingsectorComponent } from './manufacturingsector.component';

describe('ManufacturingsectorComponent', () => {
  let component: ManufacturingsectorComponent;
  let fixture: ComponentFixture<ManufacturingsectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturingsectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturingsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
