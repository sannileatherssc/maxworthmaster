import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodescannerproductComponent } from './barcodescannerproduct.component';

describe('BarcodescannerproductComponent', () => {
  let component: BarcodescannerproductComponent;
  let fixture: ComponentFixture<BarcodescannerproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodescannerproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodescannerproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
