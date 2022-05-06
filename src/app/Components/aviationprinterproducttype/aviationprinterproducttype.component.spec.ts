import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationprinterproducttypeComponent } from './aviationprinterproducttype.component';

describe('AviationprinterproducttypeComponent', () => {
  let component: AviationprinterproducttypeComponent;
  let fixture: ComponentFixture<AviationprinterproducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationprinterproducttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviationprinterproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
