import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecomputersproductComponent } from './mobilecomputersproduct.component';

describe('MobilecomputersproductComponent', () => {
  let component: MobilecomputersproductComponent;
  let fixture: ComponentFixture<MobilecomputersproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilecomputersproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecomputersproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
