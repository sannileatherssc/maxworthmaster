import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeprinterproducttypeComponent } from './barcodeprinterproducttype.component';

describe('BarcodeprinterproducttypeComponent', () => {
  let component: BarcodeprinterproducttypeComponent;
  let fixture: ComponentFixture<BarcodeprinterproducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodeprinterproducttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeprinterproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
