import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeprinterproductComponent } from './barcodeprinterproduct.component';

describe('BarcodeprinterproductComponent', () => {
  let component: BarcodeprinterproductComponent;
  let fixture: ComponentFixture<BarcodeprinterproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodeprinterproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeprinterproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
