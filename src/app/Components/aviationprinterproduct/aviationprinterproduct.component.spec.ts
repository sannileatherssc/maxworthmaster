import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationprinterproductComponent } from './aviationprinterproduct.component';

describe('AviationprinterproductComponent', () => {
  let component: AviationprinterproductComponent;
  let fixture: ComponentFixture<AviationprinterproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationprinterproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviationprinterproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
