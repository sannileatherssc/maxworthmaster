import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodescannerproducttypeComponent } from './barcodescannerproducttype.component';

describe('BarcodescannerproducttypeComponent', () => {
  let component: BarcodescannerproducttypeComponent;
  let fixture: ComponentFixture<BarcodescannerproducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodescannerproducttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodescannerproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
