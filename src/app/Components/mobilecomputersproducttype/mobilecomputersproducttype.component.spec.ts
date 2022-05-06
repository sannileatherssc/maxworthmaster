import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecomputersproducttypeComponent } from './mobilecomputersproducttype.component';

describe('MobilecomputersproducttypeComponent', () => {
  let component: MobilecomputersproducttypeComponent;
  let fixture: ComponentFixture<MobilecomputersproducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilecomputersproducttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecomputersproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
